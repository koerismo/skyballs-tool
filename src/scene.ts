import * as Three from 'three';
import { RGBEBufferLoader } from './three/RGBEBufferLoader.js';

function updateWindowSize() {
	camera.aspect = container.clientWidth / container.clientHeight;
	camera.updateProjectionMatrix();
}

const MOUSE_MULT = 1 / 200;
const view_vector = new Three.Vector2(0, 0);
function rotateView(event: MouseEvent) {
	if (!event.buttons) return;
	view_vector.x -= event.movementX * MOUSE_MULT;
	view_vector.y += event.movementY * MOUSE_MULT;
	view_vector.y = Math.min(Math.PI/2, Math.max(-Math.PI/2, view_vector.y));
}

// Scene setup

const ldrLoader = new Three.TextureLoader();
const hdrLoader = new RGBEBufferLoader();

export const container: HTMLCanvasElement = document.querySelector('#viewport')!;
export const scene = new Three.Scene();
export const camera = new Three.PerspectiveCamera(90, container.clientWidth / container.clientHeight, 0.1, 100 );

// Geometry setup

const sphere_geo = new Three.SphereGeometry(1, 200, 100);
const sphere_mat = new Three.MeshBasicMaterial({ side: Three.BackSide });
const sphere_mesh = new Three.Mesh(sphere_geo, sphere_mat);
scene.add(sphere_mesh);

function isHDR(file: string): boolean {
	return file.endsWith('.hdr') || file.endsWith('.exr');
}

async function loadTexture(url: string): Promise<void> {
	let tex: Three.Texture;
	if (isHDR(url)) {
		tex = await hdrLoader.loadAsync(url);
		renderer.toneMapping = Three.ReinhardToneMapping;
	}
	else {
		tex = await ldrLoader.loadAsync(url);
		renderer.toneMapping = Three.LinearToneMapping;
	}

	sphere_mat.map = tex;
	sphere_mat.needsUpdate = true;
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
				renderer.toneMapping = Three.ReinhardToneMapping;
			}
			else {
				tex = await ldrLoader.loadAsync(<string> reader.result);
				renderer.toneMapping = Three.LinearToneMapping;
			}

			sphere_mat.map = tex;
			sphere_mat.needsUpdate = true;
			resolve();
		}

		if (is_hdr)  reader.readAsArrayBuffer(file);
		else         reader.readAsDataURL(file);
	});
}

// Renderer setup

export const renderer = new Three.WebGLRenderer({ canvas: container, antialias: true });
renderer.setPixelRatio(devicePixelRatio);
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
	renderer.toneMappingExposure = exposure;
}

window.addEventListener('resize', updateWindowSize);
container.addEventListener('mousemove', rotateView);

// Run everything

animate();

export default {
	loadTexture,
	loadTextureFile,
	setExposure
}