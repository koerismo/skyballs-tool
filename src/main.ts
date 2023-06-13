// @ts-expect-error No type declarations :(
import saveAs from 'save-as';

import './css/index.css';
import './css/inputs.css';
import './css/range.css';

import SceneManager from './scene.js';
import { generateCubeVtfs } from './vtf/index.js';
import { renderCube } from './render.js';
import { createZip, makePath } from './export.js';
import { FormatBytesPerPixel, type ImageFormats } from './vtf/encode.js';

function updateInfo() {
	const format = input_format.value;
	const compress_enable = input_compress.checked;
	const compress_level = Math.max(Math.min(parseInt(input_compress_level.value) || 6, 9), 1);
	const size = parseInt(input_size.value);

	const bpp = FormatBytesPerPixel[format as ImageFormats];
	let filesize = (80+16 + 20*(+compress_enable) + bpp*size*size) * 6;
	if (compress_enable) filesize /= 1.8 + compress_level / 90;

	if (filesize >= 1000000000) info_filesize.innerText = (Math.round(filesize/1000/1000/1000*10)/10) + 'GB';
	else info_filesize.innerText = (Math.round(filesize/1000/1000*10)/10) + 'MB';

	info_version.innerText = compress_enable ? 'v7.6' : 'v7.4';
}

const action_import: HTMLButtonElement = document.querySelector('#action-import')!;
const action_export: HTMLButtonElement = document.querySelector('#action-export')!;

const input_name: HTMLInputElement = document.querySelector('#input-name')!;
const input_format: HTMLInputElement = document.querySelector('#input-format')!;
const input_compress: HTMLInputElement = document.querySelector('#input-compress')!;
const input_compress_level: HTMLInputElement = document.querySelector('#input-compress-level')!;
const input_size: HTMLInputElement = document.querySelector('#input-size')!;

const loader_div: HTMLDivElement = document.querySelector('#loader-container')!;
const loader_meter: HTMLMeterElement = document.querySelector('#loader-progress')!;

const info_version: HTMLSpanElement = document.querySelector('#info-version')!;
const info_filesize: HTMLSpanElement = document.querySelector('#info-size')!;

input_format.addEventListener('input', updateInfo);
input_compress.addEventListener('input', updateInfo);
input_compress_level.addEventListener('input', updateInfo);
input_size.addEventListener('input', updateInfo);

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

	loader_div.hidden = false;
	action_import.disabled = true;
	action_export.disabled = true;

	const _progress = [0, 0, 0];
	const _progressWeights = [0.5, 1.0, 0.3];
	const _maxProgress = _progressWeights.reduce((a, b) => a + b, 0);

	function updateProgress(item: number, value: number) {
		_progress[item] = value;
		loader_meter.value = _progress.reduce((x, y, i) => x + y*_progressWeights[i], 0) / _maxProgress * 100;
	}

	try {
		console.log('Rendering cubemap...');
		const rendered = renderCube(size);
		
		updateProgress(0, 1.0);

		console.log('Converting images...');
		const blob_cube = await generateCubeVtfs(rendered, size, format, compress_enable, compress_level, (x) => updateProgress(1,x));

		console.log('Creating zip...');
		const [path, rootname] = makePath(name);
		const zip = await createZip(path, rootname, blob_cube, format === 'BGRA8', (x) => updateProgress(2,x));

		saveAs(zip, rootname+'.zip');
	}

	catch(e) {
		console.warn(e);
		alert('An error occurred! Info logged to console.');
	}

	finally {
		loader_div.hidden = true;
		action_import.disabled = false;
		action_export.disabled = false;
	}
});