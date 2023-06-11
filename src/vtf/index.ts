import { generateFile } from './generate.js';
import { CompressionLevel, ImageFormats, compressMipmaps, encodeMipmap } from './encode.js';

export function generateVtf(images: Float32Array[], width: number, format: ImageFormats, compress: boolean, compression_level: CompressionLevel) {
	let mips = new Array(images.length);
	for ( let i=0; i<images.length; i++ ) mips[i] = encodeMipmap(images[i], format);
	if (compress) mips = compressMipmaps(mips, compression_level);

	return generateFile(mips, {
		compress: compress,
		compression_level: compression_level,
		format: format,
		mipmaps: mips.length,
		size: width,
		version: compress ? 6 : 5
	})
}

export function generateCubeVtfs(cube:{[key: string]: Float32Array}, width: number, format: string, compress: boolean, compression_level: number) {
	const out: {[key: string]: Blob} = {};
	for ( const face in cube ) {
		out[face] = generateVtf([cube[face]], width, format as ImageFormats, compress, compression_level as CompressionLevel);
	}
	return out;
}