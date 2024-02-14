import * as THREE from 'three'
import { GLTFLoader } from 'GLTFLoader'
import { FBXLoader } from 'FBXLoader'

var canvas = document.getElementById('myCanvas');
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, canvas.width / canvas.height, 0.1, 1000);
camera.position.x = 0.2;
camera.position.y = 1.6;
camera.position.z = 0.5;
var renderer = new THREE.WebGLRenderer({ canvas: canvas });
renderer.setSize(canvas.width, canvas.height);
var loader = new GLTFLoader();

// Chargement du modèle et de l'animation
loader.load(
    '/img/avatar.glb',
    function (gltf) {
        var model = gltf.scene;
        scene.add(model);

        // Création d'un mixer pour gérer l'animation
        var mixer = new THREE.AnimationMixer(model);

        // Récupération de l'animation depuis le fichier GLTF
        var clips = gltf.animations;

        // Ajout de l'animation au mixer
        clips.forEach(function (clip) {
            mixer.clipAction(clip).play();
        });

        // Fonction d'animation
        function animate() {
            requestAnimationFrame(animate);
            mixer.update(0.0167); // Temps écoulé entre deux trames en secondes (60 FPS)
            renderer.render(scene, camera);
        }

        // Appel de la fonction d'animation
        animate();
    },
    undefined,
    function (error) {
        console.error(error);
    }
);