import { deflate } from 'pako';
import { toHalfFloat } from 'three/src/extras/DataUtils.js';

export type CompressionLevel = 0 | 1 | -1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export type ImageFormats = 'RGBA8'|'BGRA8'|'RGBA16'|'RGBA16F'|'RGB32F'|'RGBA32F';

export const FormatBytesPerPixel: {[key in ImageFormats]: number} = {
	'RGBA8':   4,
	'BGRA8':   4,
	'RGBA16':  8,
	'RGBA16F': 8,
	'RGB32F':  12,
	'RGBA32F': 16,
} as const;

export const FormatIds: {[key in ImageFormats]: number} = {
	'RGBA8':   0,
	'BGRA8':   12,
	'RGBA16F': 24,
	'RGBA16':  25,
	'RGB32F':  28,
	'RGBA32F': 29
} as const;

export function encodeMipmap(src: Float32Array, format: ImageFormats): Uint8Array {
	const bpp = FormatBytesPerPixel[format];

	const buf = new ArrayBuffer(bpp * src.length / 4);
	const arr = new Uint8ClampedArray(buf);
	const view = new DataView(buf);

	switch (format) {

		case 'RGBA8':
			for ( let i=0; i<src.length; i++ ) {
				arr[i] = src[i] * 255;
			}
			break;

		case 'BGRA8':

			//                              Note: Is A here in floating point or not?
			//    Floating point = BGRA8888
			//              RGBf = (RGB * (A * 16)) / 16 / 256
			//              RGBf = RGBf * Af / 256

			for ( let i=0; i<src.length; i+=4 ) {
				const max_float = Math.max(src[i], src[i+1], src[i+2]);
				const max_rounded_float = Math.ceil(max_float * 255 / 16) / 255 * 16;

				arr[i  ] = Math.round(src[i+2] / max_rounded_float * 255);
				arr[i+1] = Math.round(src[i+1] / max_rounded_float * 255);
				arr[i+2] = Math.round(src[i]   / max_rounded_float * 255);
				arr[i+3] = Math.round(max_rounded_float / 16 * 4 * 255); // Random x4 multiplier. Whatever works.
			}

			break;

		case 'RGBA16':
			for ( let i=0; i<src.length; i++ ) {
				view.setUint16(i*2, src[i] * 0xffff, true);
			}
			break;

		case 'RGBA16F':
			for ( let i=0; i<src.length; i+=4 ) {
				view.setUint16(i*2,     toHalfFloat(src[i]),   true);
				view.setUint16(i*2 + 2, toHalfFloat(src[i+1]), true);
				view.setUint16(i*2 + 4, toHalfFloat(src[i+2]), true);
				view.setUint16(i*2 + 6, 0x3c00,                true);
			}
			break;

		case 'RGB32F':
			for ( let i=0; i<src.length; i+=4 ) {
				view.setFloat32(i*3,     src[i],   true);
				view.setFloat32(i*3 + 4, src[i+1], true);
				view.setFloat32(i*3 + 8, src[i+2], true);
			}
			break;

		case 'RGBA32F':
			for ( let i=0; i<src.length; i++ ) {
				view.setFloat32(i*4, src[i], true);
			}
			break;
	}

	return new Uint8Array(buf);
}

export function compressMipmap(mip: Uint8Array, level: CompressionLevel): Uint8Array {
	return deflate(mip, { level: level });
}