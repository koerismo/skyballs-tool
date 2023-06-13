import * as zip from '@zip.js/zip.js';

// const EncodeWorker = new Worker(new URL('./worker/encode.ts', import.meta.url), { type: 'module' });

export function makePath(path: string) {
	const normed = path.replace('\\', '/').replace('//', '/').replace(/[^a-zA-Z0-9\-_/]/g, '_');
	const paths = normed.split('/');

	const last = paths.length-1;
	if (!paths[last].startsWith('sky_')) paths[last] = 'sky_' + paths[last];
	
	paths.unshift('skybox');
	return [paths.join('/'), paths[last+1]];
}

export async function createZip(path: string, rootname: string, files: {[key: string]: Blob}, compressed: boolean, on_progress?: ProgressUpdate) {
	const blobWriter = new zip.BlobWriter();
	const zipWriter = new zip.ZipWriter(blobWriter);

	console.log('Writing VTFs to zip...');

	await Promise.allSettled([
		zipWriter.add(rootname+'lf.vtf', new zip.BlobReader(files.left)),
		zipWriter.add(rootname+'ft.vtf', new zip.BlobReader(files.front)),
		zipWriter.add(rootname+'bk.vtf', new zip.BlobReader(files.back)),
		zipWriter.add(rootname+'rt.vtf', new zip.BlobReader(files.right)),
		zipWriter.add(rootname+'up.vtf', new zip.BlobReader(files.up)),
		zipWriter.add(rootname+'dn.vtf', new zip.BlobReader(files.down)),
	]);

	on_progress?.( 1 / 3 );

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

	on_progress?.( 2 / 3 );

	console.log('Closing zip.');
	const out = await zipWriter.close();

	on_progress?.( 3 / 3 );

	return out;
}