import {
	DataTexture,
	LinearFilter,
	ClampToEdgeWrapping,
	LoadingManager,
	FloatType,
	LinearSRGBColorSpace,
	HalfFloatType} from 'three';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';


// DataTextureLoader
// https://github.com/mrdoob/three.js/blob/c8075f51e0baceff0feb459d143fb3586089fd2d/src/loaders/DataTextureLoader.js#L12

// RGBELoader
// https://github.com/mrdoob/three.js/blob/c8075f51e0baceff0feb459d143fb3586089fd2d/examples/jsm/loaders/RGBELoader.js#L13

export class RGBEBufferLoader extends RGBELoader {
	constructor(manager?: LoadingManager) {
		super(manager);
	}

	fromBuffer(buffer: ArrayBuffer) {
		const texData = this.parse(buffer);

		if (!texData || !texData.data) return null;
		const texture = new DataTexture(texData.data, texData.width, texData.height);

		texture.wrapS = ClampToEdgeWrapping;
		texture.wrapT = ClampToEdgeWrapping;

		texture.magFilter = LinearFilter;
		texture.minFilter = LinearFilter;

		texture.type = texData.type;

		texture.anisotropy = 1;
		switch ( texData.type ) {
			case FloatType:
			case HalfFloatType:
				texture.colorSpace = LinearSRGBColorSpace;
				texture.generateMipmaps = false;
				texture.flipY = true;
				break;
		}

		texture.needsUpdate = true;
		return texture;
	}
}