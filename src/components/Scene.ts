import * as THREE from 'three';

export class Scene {
  private scene: THREE.Scene;

  constructor() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x000000);
  }

  getScene(): THREE.Scene {
    return this.scene;
  }

  add(object: THREE.Object3D) {
    this.scene.add(object);
  }

  remove(object: THREE.Object3D) {
    this.scene.remove(object);
  }
}