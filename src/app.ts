import { Scene } from './components/Scene';
import { Camera } from './components/Camera';
import { Renderer } from './components/Renderer';
import { Controls } from './helpers/Controls';
import { ModelLoader } from './components/ModelLoader';
import { Helpers } from './debugger/Helpers';
export class App {
  private scene: Scene;
  private camera: Camera;
  private renderer: Renderer;
  private controls: Controls;
  private modelLoader: ModelLoader;
  private helpers: Helpers;

  constructor() {
    this.scene = new Scene();
    this.camera = new Camera();
    this.renderer = new Renderer();
    this.controls = new Controls(this.camera.getCamera(), this.renderer.getDomElement());
    this.modelLoader = new ModelLoader();
    this.helpers = new Helpers();
  }

  init() {
    document.body.appendChild(this.renderer.getDomElement());
    this.loadModels();
    this.animate();
    this.addHelps();
  }

  async loadModels() {
    try {
      const model = await this.modelLoader.loadModel('assets/models/phone.glb');
      this.scene.add(model);
    } catch (error) {
      console.error(error);
    }
  }

  addHelps() {
    this.scene.add(this.helpers.getAxesHelper(5));
  }

  animate() {
    requestAnimationFrame(() => this.animate());
    this.controls.update();
    this.renderer.render(this.scene.getScene(), this.camera.getCamera());
  }
}