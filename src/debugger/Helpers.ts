import * as THREE from 'three';

export class Helpers {
  getAxesHelper(size: number = 5): THREE.AxesHelper {
    const axesHelper = new THREE.AxesHelper(size);
    return axesHelper;
  }
}
