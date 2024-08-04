import { Scene } from './components/Scene';
import { Camera } from './components/Camera';
import { Renderer } from './components/Renderer';
import { Controls } from './helpers/Controls';

export class App {
  private scene: Scene;
  private camera: Camera;
  private renderer: Renderer;
  private controls: Controls;

  constructor() {
    this.scene = new Scene();
    this.camera = new Camera();
    this.renderer = new Renderer();
    this.controls = new Controls(this.camera.getCamera(), this.renderer.getDomElement());
  }

  init() {
    document.body.appendChild(this.renderer.getDomElement());
    this.animate();
  }

  animate() {
    requestAnimationFrame(() => this.animate());
    this.controls.update();
    this.renderer.render(this.scene.getScene(), this.camera.getCamera());
  }
}