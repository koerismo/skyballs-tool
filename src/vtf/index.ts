import { generateFile } from './generate.js';
import { CompressionLevel, ImageFormats, compressMipmap, encodeMipmap } from './encode.js';
import type { ProgressUpdate } from '../types.js';

export function generateVtf(image: Float32Array, width: number, format: ImageFormats, compress: boolean, compression_level: CompressionLevel) {
	let mip = encodeMipmap(image, format);
	if (compress) mip = compressMipmap(mip, compression_level);

	return generateFile(mip, {
		compress: compress,
		compression_level: compression_level,
		format: format,
		mipmaps: 1,
		size: width,
		version: compress ? 6 : 5
	})
}

export async function generateCubeVtfs(
		cube:{[key: string]: Float32Array},
		width: number,
		format: string,
		compress: boolean,
		compression_level: number,
		on_progress?: ProgressUpdate): Promise<{[key: string]: Blob}> {

	return new Promise(resolve => {
		const out: {[key: string]: Blob} = {};
		const faces = Object.keys(cube);

		let i = 0;
		const doFace = () => {

			const face = faces[i];
			out[face] = generateVtf(cube[face], width, format as ImageFormats, compress, compression_level as CompressionLevel);

			i += 1;
			on_progress?.(i / faces.length);
			if (i >= faces.length) resolve(out);
			else setTimeout(doFace, 20);
		}

		setTimeout(doFace, 20);
	});
}