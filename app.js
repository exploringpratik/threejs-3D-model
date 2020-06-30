let container;
let camera;
let renderer;
let scene;
let house;

function init() {
    container = document.querySelector('.scene');

    //Create scene
    scene = new THREE.Scene();

    //Field of view
    const fov = 30;
    const aspect = container.clientWidth / container.clientHeight;
    const near = 0.1;
    const far = 10000;

    //Camera Setup
    camera = new THREE.PerspectiveCamera(
        fov, aspect, near, far
    );
    camera.position.set(0, 0, 50);

    const ambient = new THREE.AmbientLight(0xFFFFFFFF, 1);
    scene.add(ambient);

    //Light
    const light = new THREE.DirectionalLight(0x404040, 1);
    light.position.set(0, 0, 50);
    scene.add(light);

    //Renderer
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    // Load Model
    let loader = new THREE.GLTFLoader();
    loader.load('./untitled.glb', function (gltf) {
        scene.add(gltf.scene);
        vespa = gltf.scene.children[0];

        animate();
    });

    function animate() {
        requestAnimationFrame(animate);
        vespa.rotation.y += 0.005;
        renderer.render(scene, camera);

    }
}

init();