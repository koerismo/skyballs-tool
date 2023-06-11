import * as zip from '@zip.js/zip.js';

export function makePath(path: string) {
	const normed = path.replace('\\', '/').replace('//', '/').replace(/[^a-zA-Z0-9\-_/]/g, '_');
	const paths = normed.split('/');
	const last = paths[paths.length-1] = 'sky_' + paths[paths.length-1];
	paths.unshift('skybox');
	return [paths.join('/'), last];
}

export async function createZip(name: string, files: {[key: string]: Blob}, compressed: boolean) {
	const [path, rootname] = makePath(name);
	const blobWriter = new zip.BlobWriter();
	const zipWriter = new zip.ZipWriter(blobWriter);

	console.log('Writing VTFs to zip...');

	await Promise.allSettled([
		zipWriter.add(rootname+'lf.vtf', new zip.BlobReader(files.face_left)),
		zipWriter.add(rootname+'ft.vtf', new zip.BlobReader(files.face_front)),
		zipWriter.add(rootname+'bk.vtf', new zip.BlobReader(files.face_back)),
		zipWriter.add(rootname+'rt.vtf', new zip.BlobReader(files.face_right)),
		zipWriter.add(rootname+'up.vtf', new zip.BlobReader(files.face_up)),
		zipWriter.add(rootname+'dn.vtf', new zip.BlobReader(files.face_down)),
	]);

	function vmt(suffix: string) {
		return new zip.TextReader(`Sky
{
	$basetexture "${path}${suffix}"
	$hdr${ compressed ? "compressed" : "base" }texture "${path}${suffix}"
}
`)}

	console.log('Writing VMTs to zip...');

	await Promise.allSettled([
		zipWriter.add(rootname+'lf.vmt', vmt('lf')),
		zipWriter.add(rootname+'ft.vmt', vmt('ft')),
		zipWriter.add(rootname+'bk.vmt', vmt('bk')),
		zipWriter.add(rootname+'rt.vmt', vmt('rt')),
		zipWriter.add(rootname+'up.vmt', vmt('up')),
		zipWriter.add(rootname+'dn.vmt', vmt('dn')),
	]);

	console.log('Closing zip.');

	return await zipWriter.close();
}