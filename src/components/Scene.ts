import * as THREE from 'three';

export class Scene {
  private scene: THREE.Scene;

  constructor() {
    this.scene = new THREE.Scene();
    // this.scene.background = new THREE.Color(0x000000);

    // 平行光1
    var directionalLight = new THREE.DirectionalLight(0xffffff, 12);
    directionalLight.position.set(400, 200, 300);
    this.scene.add(directionalLight);
    // 平行光2
    var directionalLight2 = new THREE.DirectionalLight(0xffffff, 12);
    directionalLight2.position.set(-400, -200, -300);
    this.scene.add(directionalLight2);
    //环境光
    var ambient = new THREE.AmbientLight(0xffffff, 0.9);
    this.scene.add(ambient);
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
