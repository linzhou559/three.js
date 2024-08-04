import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export class Controls {
  private controls: OrbitControls;

  constructor(camera: THREE.PerspectiveCamera, domElement: HTMLElement) {
    this.controls = new OrbitControls(camera, domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.25;
    this.controls.enableZoom = true;
  }

  update() {
    this.controls.update();
  }
}