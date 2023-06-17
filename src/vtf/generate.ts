import { DataBuffer } from './buffer.js';
import { CompressionLevel, FormatIds, ImageFormats } from './encode.js';

export interface VtfInfo {
	version: number;
	compress: boolean;
	compression_level: CompressionLevel;
	size: number;
	mipmaps: number;
	format: ImageFormats;
}

export function writeFileHeader(buf: DataBuffer, info: VtfInfo, resourceCount: number): ArrayBuffer {

	buf.set_endian(true);
	buf.write_str('VTF\0', 4);

	// File format version
	buf.write_u32(7);
	buf.write_u32(info.version);
	buf.write_u32(80 + resourceCount * 8);

	// Other properties
	buf.write_u16(info.size);
	buf.write_u16(info.size);
	buf.write_u32(
		0x0001 | // Point sampling
		0x0004 | // Clamp S
		0x0008 | // Clamp T
		0x0100 | // No mipmaps
		0x0200 | // No LOD
		0x2000   // 8-bit alpha
	);
	buf.write_u16(1); // frames
	buf.write_u16(0); // first frame

	buf.pad(4);
	buf.write_f32(new Float32Array([0,0,0])); // reflectivity
	buf.pad(4);

	buf.write_f32(1); // bump scale
	buf.write_u32(FormatIds[info.format]);
	buf.write_u8(info.mipmaps);

	// Thumbnail
	// TODO: Change to 16x16 and add 128 dummy bytes?
	buf.write_u32(13); // format
	buf.write_u8(0);   // width
	buf.write_u8(0);   // height

	buf.write_u16(1); // slices

	buf.pad(3);
	buf.write_u32(resourceCount); // resource count
	buf.pad(8);

	return buf.buffer;
}

export function generateAXCBody(mips: Uint8Array[], level: number): ArrayBuffer {
	const buf = new DataBuffer(mips.length * 4 + 8);
	buf.write_u32(buf.length - 4, true);
	buf.write_i32(level, true);
	for ( let i=0; i<mips.length; i++ ) {
		buf.write_u32(mips[i].length, true);
	}
	return buf.buffer;
}

function writeChunkHeader(buffer: DataBuffer, tag: string, offset: number, flags: number) {
	buffer.write_str(tag, 3);
	buffer.write_u8(flags);
	buffer.write_u32(offset);
}

export function generateFile(mip: Uint8Array, info: VtfInfo): Blob {
	const isCompressed = info.version >= 6 && info.compress;
	const resourceCount = isCompressed ? 3 : 2;

	const body: BlobPart[] = [];
	const headerLength = 80 + resourceCount * 8;
	const headerBuf = new DataBuffer(headerLength);
	body.push(headerBuf.buffer);

	writeFileHeader(headerBuf, info, resourceCount);
	writeChunkHeader(headerBuf, '\x01\0\0', 0, 0x2);
	writeChunkHeader(headerBuf, '\x30\0\0', headerLength, 0x0);

	const axcPointer = headerLength + mip.length;
	body.push(mip);

	if (isCompressed) {
		writeChunkHeader(headerBuf, 'AXC', axcPointer, 0x0);
		const axc_body = generateAXCBody([mip], info.compression_level);
		body.push(axc_body);
	}

	return new Blob(body)
}