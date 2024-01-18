import * as THREE from "three"
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
const ambientLight = new THREE.AmbientLight(0xffffff, 0.1)
const pointlight = new THREE.PointLight(0xffffff,10,1000)
scene.add(ambientLight);
scene.add(pointlight);
camera.position.z = 5
let posx = 0;
let posy= 0;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth,window.innerHeight)

document.body.appendChild(renderer.domElement)

const geometry = new THREE.BoxGeometry(1,1,1,1)
const material = new THREE.MeshStandardMaterial({color:'red'})
const cube =new THREE.Mesh(geometry,material)
scene.add(cube)
const lightgeometry = new THREE.SphereGeometry(0.4,32,16)
const lightmaterial = new THREE.MeshBasicMaterial({color:'yellow'})
const sphere =new THREE.Mesh(lightgeometry,lightmaterial)

scene.add(sphere)
renderer.render(scene,camera)
const keys = {};
document.addEventListener("keydown", (event) => {
    keys[event.key] = true;
    handleKeys();
});


document.addEventListener("keyup", (event) => {
    keys[event.key] = false;
    handleKeys();
});
const controls = new OrbitControls(camera,renderer.domElement)
function handleKeys() {

    if (keys["ArrowUp"]) {
        posx += 0.1
        cube.rotation.x = posx;
        renderer.render(scene,camera)
        console.log("Moving up");
    }
    if (keys["ArrowDown"]) {
        posx -= 0.1
        cube.rotation.x = posx;
        renderer.render(scene,camera) 
        console.log("Moving down");
    }
    if (keys["ArrowLeft"]) {
        posy += 0.1
        cube.rotation.y = posy;
        renderer.render(scene,camera)
        console.log("Moving left");
    }
    if (keys["ArrowRight"]) {
        posy -= 0.1
        cube.rotation.y = posy;
        renderer.render(scene,camera)
        console.log("Moving left");
        console.log("Moving right");
    }
    if (keys["w"]) {
        if (cube.position.y<3) {
            posx += 0.1
            cube.position.y = posx;
            renderer.render(scene,camera)
            console.log("Moving up");
        }
    }
    if (keys["s"]) {
        if (cube.position.y>-3) {
        posx -= 0.1
        cube.position.y = posx;
        renderer.render(scene,camera) 
        console.log("Moving down");
    }}
    if (keys["ArrowLeft"] || keys["a"]) {
        if (cube.position.x>=-6.5) {
            console.log(cube.position.x)
        posy -= 0.1
        cube.position.x = posy;
        renderer.render(scene,camera)
        console.log("Moving left");}
    }
    if (keys["d"]) {
        if (cube.position.x<=6.5) {
        posy += 0.1
        cube.position.x = posy;
        renderer.render(scene,camera)
        console.log("Moving left");
        console.log("Moving right");
    }}
}
let q = 0;
animate();
function animate() {
    q+=0.01
    let qsin = Math.sin(q);
    let qcos = Math.cos(q);
    let scoc = qsin*4;
    let ssin = qcos*4;
    sphere.position.set(ssin,0,scoc)
    pointlight.position.set(ssin,0,scoc)
    renderer.render(scene,camera)
    requestAnimationFrame(animate);
    
}