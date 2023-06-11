import * as zip from '@zip.js/zip.js';

export async function createZip(name: string, files: {[key: string]: Blob}) {
	const blobWriter = new zip.BlobWriter();
	const zipWriter = new zip.ZipWriter(blobWriter);

	Promise.allSettled([
		zipWriter.add(`${name}ft.vtf`, new zip.BlobReader(files.face_front)),
		zipWriter.add(`${name}lf.vtf`, new zip.BlobReader(files.face_left)),
		zipWriter.add(`${name}bk.vtf`, new zip.BlobReader(files.face_back)),
		zipWriter.add(`${name}rt.vtf`, new zip.BlobReader(files.face_right)),
		zipWriter.add(`${name}up.vtf`, new zip.BlobReader(files.face_up)),
		zipWriter.add(`${name}dn.vtf`, new zip.BlobReader(files.face_down)),
	]);

	return await zipWriter.close();
}