import * as THREE from "https://cdn.skypack.dev/three@0.133.1/build/three.module";
import { OrbitControls } from "https://cdn.skypack.dev/three@0.133.1/examples/jsm/controls/OrbitControls";

export function globe() {
  if (window.innerWidth <= 767) return

  const containerEl = document.querySelector(".globe-wrapper");
  const canvas3D = containerEl.querySelector("#globe-3d");
  const canvas2D = containerEl.querySelector("#globe-2d-overlay");
  let renderer, scene, camera, rayCaster, controls, group;
  let clock, mouse, globe, globeMesh;
  let earthTexture, mapMaterial;
  let dragged = false;
  initScene();
  window.addEventListener("resize", updateSize);
  function initScene() {
    renderer = new THREE.WebGLRenderer({canvas: canvas3D, alpha: true});
    renderer.setPixelRatio(2);
    scene = new THREE.Scene();
    camera = new THREE.OrthographicCamera(-1.1, 1.1, 1.1, -1.1, 0, 3);
    camera.position.z = 1.1;
    rayCaster = new THREE.Raycaster();
    rayCaster.far = 1.15;
    mouse = new THREE.Vector2(-1, -1);
    clock = new THREE.Clock();
    createOrbitControls();
    new THREE.TextureLoader().load(
      "https://ksenia-k.com/img/earth-map-colored.png",
      (mapTex) => {
        earthTexture = mapTex;
        earthTexture.repeat.set(1, 1);
        createGlobe();
        updateSize();
        render();
      });
  }

  function createOrbitControls() {
    controls = new OrbitControls(camera, canvas3D);
    controls.enablePan = false;
    controls.enableZoom = false;
    controls.enableDamping = true;
    controls.minPolarAngle = .4 * Math.PI;
    controls.maxPolarAngle = .4 * Math.PI;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1.5;
    let timestamp;
    controls.addEventListener("start", () => timestamp = Date.now());
    controls.addEventListener("end", () => dragged = (Date.now() - timestamp) > 600);
  }

  function createGlobe() {
    const globeGeometry = new THREE.IcosahedronGeometry(1, 22);
    mapMaterial = new THREE.ShaderMaterial({
      vertexShader: document.getElementById("vertex-shader-map").textContent,
      fragmentShader: document.getElementById("fragment-shader-map").textContent,
      uniforms: {
        u_map_tex: {type: "t", value: earthTexture},
        u_dot_size: {type: "f", value: 0},
        u_pointer: {type: "v3", value: new THREE.Vector3(.0, .0, 1.)},
        u_time_since_click: {value: 0},
      },
      alphaTest: false,
      transparent: true
    });
    globe = new THREE.Points(globeGeometry, mapMaterial);
    scene.add(globe);
    globeMesh = new THREE.Mesh(globeGeometry, new THREE.MeshBasicMaterial({
      color: 0x222222,
      transparent: true,
      opacity: .05
    }));
    scene.add(globeMesh);
  }

  function render() {
    mapMaterial.uniforms.u_time_since_click.value = clock.getElapsedTime();
    controls.update();
    renderer.render(scene, camera);
    requestAnimationFrame(render);
  }

  function updateSize() {
    const minSide = .65 * Math.min(window.innerWidth, window.innerHeight);
    containerEl.style.width = minSide + "px";
    containerEl.style.height = minSide + "px";
    renderer.setSize(minSide, minSide);
    canvas2D.width = canvas2D.height = minSide;
    mapMaterial.uniforms.u_dot_size.value = .04 * minSide;
  }
}
