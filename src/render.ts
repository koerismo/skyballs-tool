import * as Three from 'three';
import { scene } from './scene.js';

// const debug_canvas: HTMLCanvasElement = document.querySelector('#debug-canvas')!;

const export_camera = new Three.PerspectiveCamera(90, 1/1, 0.1, 2);
const export_renderer = new Three.WebGLRenderer({ antialias: true });
const export_target = new Three.WebGLRenderTarget(16, 16, { generateMipmaps: true, type: Three.FloatType });
export_renderer.setRenderTarget(export_target);

function readCameraData() {
	// Read the render target's data as a float32array.
	const target = new Float32Array(export_target.width * export_target.height * 4);
	export_renderer.readRenderTargetPixels(export_target, 0, 0, export_target.width, export_target.height, target);

	// Temporary: log the data
	return target;
}

export function renderCube(resolution: number) {
	// TODO: Possibly render mipmaps through this? The buffer has to be sized correctly, otherwise webgl shits itself.
	export_renderer.setSize(resolution, resolution);
	export_target.setSize(resolution, resolution);
	export_renderer.setRenderTarget(export_target);

	// North face
	export_camera.setRotationFromEuler(new Three.Euler(0, 0, 0));
	export_renderer.render( scene, export_camera );
	return readCameraData();
}