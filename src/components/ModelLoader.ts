import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export class ModelLoader {
  private loader: GLTFLoader;

  constructor() {
    this.loader = new GLTFLoader();
  }

  loadModel(path: string): Promise<THREE.Group> {
    return new Promise((resolve, reject) => {
      this.loader.load(
        path,
        (gltf) => {
          console.log('Model loaded:', gltf);
          resolve(gltf.scene);
        },
        undefined,
        (error) => {
          const errorMessage = (error as Error).message;
          reject(new Error(`Failed to load model: ${errorMessage}`));
        }
      );
    });
  }
}
