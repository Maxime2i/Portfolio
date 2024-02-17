import * as THREE from 'three'
import { GLTFLoader } from 'GLTFLoader'
import { FBXLoader } from 'FBXLoader'

var canvas = document.getElementById('myCanvas')
var scene = new THREE.Scene()
var camera = new THREE.PerspectiveCamera(75, canvas.width / canvas.height, 0.1, 1000)
camera.position.x = 0.15
camera.position.y = 1.65
camera.position.z = 0.4
var renderer = new THREE.WebGLRenderer({ canvas: canvas })
renderer.setSize(canvas.width, canvas.height)
const pointLight = new THREE.PointLight(0xffffff, 50)

pointLight.position.set(0, 5, 5)

scene.add(pointLight)



const loader = new GLTFLoader();
let avatar, neck, waist

loader.load('./img/av.glb', function (gltf) {
    avatar = gltf.scene;
    scene.add(avatar);
/*
    avatar.traverse(o => {
        console.log(o.name);
        if (o.name === 'Neck') { 
          neck = o;
        }
        if (o.name === 'Spine') { 
          waist = o;
        }
    })
    */
});



// Démarrer l'animation
function animate() {
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
animate();
