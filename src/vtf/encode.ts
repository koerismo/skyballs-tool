import pako from 'pako';

export type CompressionLevel = 0 | 1 | -1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export type ImageFormats = 'RGBA8'|'BGRA8'|'RGBA16'|'RGB32F'|'RGBA32F';

export const FormatBytesPerPixel: {[key in ImageFormats]: number} = {
	'RGBA8':   4,
	'BGRA8':   4,
	'RGBA16':  8,
	'RGB32F':  12,
	'RGBA32F': 16,
} as const;

export const FormatIds: {[key in ImageFormats]: number} = {
	'RGBA8':   0,
	'BGRA8':   12,
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
				const max = Math.max(src[i], src[i+1], src[i+2]);

				arr[i  ] = src[i+2] / max * 255;
				arr[i+1] = src[i+1] / max * 255;
				arr[i+2] = src[i  ] / max * 255;
				arr[i+3] = max / 16 * 255;
			}
			break;

		case 'RGBA16':
			for ( let i=0; i<src.length; i++ ) {
				view.setUint16(i*2, src[i] * 0xffff, true);
			}
			break;

		case 'RGB32F':
			for ( let i=0; i<src.length; i+=4 ) {
				view.setFloat32(i*4,     src[i],   true);
				view.setFloat32(i*4 + 4, src[i+1], true);
				view.setFloat32(i*4 + 8, src[i+2], true);
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

export function compressMipmaps(mips: Uint8Array[], level: CompressionLevel ): Uint8Array[] {
	const out: Uint8Array[] = new Array(mips.length);
	for ( let i=0; i<mips.length; i++ ) {
		out[i] = pako.deflateRaw(mips[i], { level: level });
	}
	return out;
}