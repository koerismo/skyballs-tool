import { generateFile } from './generate.js';
import { CompressionLevel, ImageFormats, compressMipmap, encodeMipmap } from './encode.js';
export const CUBE_FACES: FaceList = ['front', 'left', 'back', 'right', 'up', 'down'];

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
	});
}

export async function generateCubeVtfs(
		cube: Cube<Float32Array>,
		width: number,
		format: string,
		compress: boolean,
		compression_level: number,
		on_progress?: ProgressUpdate): Promise<{[key: string]: Blob}> {

	return new Promise(resolve => {
		const out: {[key: string]: Blob} = {};
		let i = 0;
		const doFace = () => {

			const face = CUBE_FACES[i];
			out[face] = generateVtf(cube[face], width, format as ImageFormats, compress, compression_level as CompressionLevel);

			i += 1;
			on_progress?.(i / CUBE_FACES.length);
			if (i >= CUBE_FACES.length) resolve(out);
			else setTimeout(doFace, 20);
		}

		setTimeout(doFace, 20);
	});
}