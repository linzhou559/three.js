import * as THREE from 'three';

export class Renderer {
  private renderer: THREE.WebGLRenderer;

  constructor() {
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    window.addEventListener('resize', () => {
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    });
  }

  getRenderer(): THREE.WebGLRenderer {
    return this.renderer;
  }

  getDomElement(): HTMLElement {
    return this.renderer.domElement;
  }

  render(scene: THREE.Scene, camera: THREE.PerspectiveCamera) {
    this.renderer.render(scene, camera);
  }
}