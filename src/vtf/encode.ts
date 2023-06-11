import pako from 'pako';

export type CompressionLevel = 0 | 1 | -1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export type ImageFormats = 'BGRA8'|'RGBA16'|'RGB32F'|'RGBA32F';

export const FormatBytesPerPixel: {[key in ImageFormats]: number} = {
	'BGRA8':   4,
	'RGBA16':  8,
	'RGB32F':  12,
	'RGBA32F': 16,
} as const;

export const FormatIds: {[key in ImageFormats]: number} = {
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

		case 'BGRA8':
			for ( let i=0; i<src.length; i+=4 ) {
				arr[i  ] = src[i+2] * 255;
				arr[i+1] = src[i+1] * 255;
				arr[i+2] = src[i  ] * 255;
				arr[i+3] = src[i+3] * 255;
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