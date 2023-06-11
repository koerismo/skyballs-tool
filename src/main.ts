import saveAs from 'save-as';

import './css/index.css';
import './css/inputs.css';
import './css/range.css';


import SceneManager from './scene.js';
import { generateCubeVtfs } from './vtf/index.js';
import { renderCube } from './render.js';
import { createZip } from './export.js';

const action_import: HTMLButtonElement = document.querySelector('#action-import')!;
const action_export: HTMLButtonElement = document.querySelector('#action-export')!;
const input_name: HTMLInputElement = document.querySelector('#input-name')!;
const input_format: HTMLInputElement = document.querySelector('#input-format')!;
const input_compress: HTMLInputElement = document.querySelector('#input-compress')!;
const input_compress_level: HTMLInputElement = document.querySelector('#input-compress-level')!;
const input_size: HTMLInputElement = document.querySelector('#input-size')!;

input_compress.checked = false;
input_compress_level.disabled = true;
input_compress.addEventListener('input', () => {
	input_compress_level.disabled = !input_compress.checked;
});

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
	const value: number = parseFloat(vp_exposure.value);

	SceneManager.setExposure(value);
	vp_exposure_value.innerText = value.toFixed(2);
});

SceneManager.loadTexture('./test/kloofendal_overcast_1k.hdr');

document.body.addEventListener('dragover', event => {
	event.preventDefault();
});

document.body.addEventListener('drop', event => {
	event.preventDefault();
	if (!event.dataTransfer?.files?.length) return;
	SceneManager.loadTextureFile(event.dataTransfer.files[0]);
});

action_export.addEventListener('click', async () => {
	const name = input_name.value;
	const format = input_format.value;
	const compress_enable = input_compress.checked;
	const compress_level = Math.max(Math.min(parseInt(input_compress_level.value) || 6, 9), 1);
	const size = parseInt(input_size.value);

	if (isNaN(size))
		return alert(`Could not parse size "${input_size.value}"`);
	if (size > 8192)
		return alert(`Size must be smaller than or equal to 8192!`);
	if (size < 16)
		return alert(`Size must be larger than or equal to 16!`);
	if ((Math.log2(size) % 1) && !confirm('Size should be a power of two! Continue anyways?'))
		return;

	console.log('Rendering cubemap...');
	const rendered = renderCube(size);

	console.log('Converting images...');
	const blob_cube = generateCubeVtfs(rendered, size, format, compress_enable, compress_level);

	console.log('Creating zip...')
	const zip = await createZip(name, blob_cube, format === 'BGRA8888');
	saveAs(zip, name+'.zip');
});