import * as THREE from "three";

/**
 * 基础场景 简单的模板。
 */
export class BasicView {
  public scene: THREE.Scene;

  public camera: THREE.PerspectiveCamera;

  public renderer: THREE.WebGLRenderer;

  public containerElement: HTMLElement;

  constructor() {
    this.containerElement = document.createElement("div");
    this.containerElement.setAttribute("id", "aaa");
    document.body.appendChild(this.containerElement);

    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      1,
      200000
    );
    this.camera.position.z = -1000;

    const needAntialias = window.devicePixelRatio === 1.0;

    this.renderer = new THREE.WebGLRenderer({
      antialias: needAntialias,
      alpha: true
    });
    this.renderer.setClearColor(0xffffff, 0);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.containerElement.appendChild(this.renderer.domElement);

    window.addEventListener("resize", e => {
      this.handleResize(e);
    });
  }

  /**
   * 开始渲染。
   */
  public startRendering(): void {
    this.update();
  }

  /**
   * 执行渲染。
   */
  public render(): void {
    this.renderer.render(this.scene, this.camera);
  }

  public onTick(): void {}

  /**
   * 窗口resize处理。
   * @param event
   */
  protected handleResize(event): void {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  /**
   * requestAnimationFrame 。
   * @private
   */
  protected update(): void {
    requestAnimationFrame(this.update.bind(this));

    this.onTick();
    this.render();
  }
}
