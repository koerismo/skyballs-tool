import './style.css';
import SceneManager from './scene.js';
import { renderCube } from './render.js';

const action_import: HTMLButtonElement = document.querySelector('#action-import')!;
const action_export: HTMLButtonElement = document.querySelector('#action-export')!;
const input_format: HTMLInputElement = document.querySelector('#input-format')!;
const input_compress: HTMLInputElement = document.querySelector('#input-compress')!;
const input_size: HTMLInputElement = document.querySelector('#input-size')!;

const vp_exposure: HTMLInputElement = document.querySelector('#vp-exposure')!;
const vp_exposure_value: HTMLInputElement = document.querySelector('#vp-exposure-value')!;

const filepicker = document.createElement('input');
filepicker.type = 'file';

action_import.addEventListener('click', () => {
	filepicker.oninput = () => {
		if (!filepicker.files?.length) return;
		SceneManager.loadTextureFile(filepicker.files[0]);
	}
	filepicker.click();
});

SceneManager.setExposure(1.0);
vp_exposure.addEventListener('input', () => {
	//@ts-ignore shitty type conversion. nothing to see here.
	const value: number = vp_exposure.value * 1;

	SceneManager.setExposure(value);
	vp_exposure_value.innerText = value.toFixed(2);
});

SceneManager.loadTexture('/test/kloofendal_overcast_2k.jpeg');

document.body.addEventListener('dragover', event => {
	event.preventDefault();
});

document.body.addEventListener('drop', event => {
	event.preventDefault();
	if (!event.dataTransfer?.files?.length) return;
	SceneManager.loadTextureFile(event.dataTransfer.files[0]);
});

action_export.addEventListener('click', () => {
	renderCube(16);
});