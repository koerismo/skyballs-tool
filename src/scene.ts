import * as Three from 'three';
import { RGBEBufferLoader } from './three/RGBEBufferLoader.js';
import { export_renderer } from './render.js';

function updateWindowSize() {
	renderer.setSize(divContainer.clientWidth, divContainer.clientHeight);
	camera.aspect = divContainer.clientWidth / divContainer.clientHeight;
	camera.updateProjectionMatrix();
}

const MOUSE_MULT = 1 / 200;
const view_vector = new Three.Vector2(0, 0);
let view_zoom = 1;
function rotateView(event: MouseEvent) {
	if (!event.buttons) return;
	const adjustment = view_zoom / 2 + 0.5;
	view_vector.x -= event.movementX * MOUSE_MULT / adjustment;
	view_vector.y += event.movementY * MOUSE_MULT / adjustment;
	view_vector.y = Math.min(Math.PI/2, Math.max(-Math.PI/2, view_vector.y));
}

function zoomView(event: WheelEvent) {
	view_zoom -= event.deltaY * view_zoom / 400;
	view_zoom = Math.max(0.5, Math.min(10, view_zoom));
	camera.zoom = view_zoom;
	camera.updateProjectionMatrix();
}

// Scene setup

const ldrLoader = new Three.TextureLoader();
const hdrLoader = new RGBEBufferLoader();
const context = { hdr: true, exposure: 1.0 };

export const divContainer: HTMLDivElement = document.querySelector('#viewport-container')!;
export const container: HTMLCanvasElement = document.querySelector('#viewport')!;
export const scene = new Three.Scene();
export const camera = new Three.PerspectiveCamera(90, container.clientWidth / container.clientHeight, 0.1, 100 );

// Geometry setup

const sphere_geo = new Three.SphereGeometry(1, 200, 100);
const sphere_mat = new Three.MeshBasicMaterial({ side: Three.DoubleSide });
const sphere_mesh = new Three.Mesh(sphere_geo, sphere_mat);
sphere_geo.scale(1, 1, -1);
scene.add(sphere_mesh);

function isHDR(file: string): boolean {
	return file.endsWith('.hdr') || file.endsWith('.exr');
}

function updateTexture(tex: Three.Texture, hdr: boolean) {
	context.hdr = hdr;

	const tonemapping = hdr ? Three.ReinhardToneMapping : Three.LinearToneMapping;
	renderer.toneMapping = tonemapping;

	const colorSpace = hdr ? Three.LinearSRGBColorSpace : Three.SRGBColorSpace;
	tex.colorSpace = export_renderer.outputColorSpace = renderer.outputColorSpace = colorSpace;

	setExposure(context.exposure);
	sphere_mat.map = tex;
	sphere_mat.needsUpdate = true;
}

async function loadTexture(url: string): Promise<void> {
	let tex: Three.Texture;
	const is_hdr = isHDR(url);

	if (is_hdr) {
		tex = await hdrLoader.loadAsync(url);
	}
	else {
		tex = await ldrLoader.loadAsync(url);
	}

	if (tex) updateTexture(tex, is_hdr);
	return Promise.resolve();
}

async function loadTextureFile(file: File): Promise<void> {
	return new Promise(resolve => {
		const reader = new FileReader();
		const is_hdr = isHDR(file.name);

		reader.onload = async () => {

			let tex;
			if (is_hdr) {
				tex = hdrLoader.fromBuffer(<ArrayBuffer> reader.result);
			}
			else {
				tex = await ldrLoader.loadAsync(<string> reader.result);
			}

			if (tex) updateTexture(tex, is_hdr);
			else console.warn('Failed to parse file!');
			resolve();
		}

		if (is_hdr)  reader.readAsArrayBuffer(file);
		else         reader.readAsDataURL(file);
	});
}

// Renderer setup

export const renderer = new Three.WebGLRenderer({ canvas: container, antialias: true, stencil: false, depth: false });
renderer.setPixelRatio(window.devicePixelRatio);
updateWindowSize();

function animate() {
	const vert_angle = Math.cos(view_vector.y);
	camera.lookAt(
		Math.cos(view_vector.x) * vert_angle,
		Math.sin(view_vector.y),
		Math.sin(view_vector.x) * vert_angle,
	);

	renderer.render(scene, camera);
	requestAnimationFrame( animate );
}

function setExposure(exposure: number) {
	context.exposure = exposure;
	renderer.toneMappingExposure = context.hdr ? exposure*4 : exposure;
}

window.addEventListener('resize', updateWindowSize);
container.addEventListener('mousemove', rotateView);
container.addEventListener('wheel', zoomView);

// Run everything

animate();

export default {
	loadTexture,
	loadTextureFile,
	setExposure
}