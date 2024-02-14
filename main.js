import * as THREE from 'three';
import { GLTFLoader } from 'GLTFLoader';

// Récupérer le canvas par son ID
var canvas = document.getElementById('myCanvas');

// Créez une scène
var scene = new THREE.Scene();

// Créez une caméra
var camera = new THREE.PerspectiveCamera(75, canvas.width / canvas.height, 0.1, 1000);
camera.position.z = 5;

// Créez un moteur de rendu
var renderer = new THREE.WebGLRenderer({ canvas: canvas });
renderer.setSize(canvas.width, canvas.height);

// Créez un chargeur GLTF
var loader = new GLTFLoader();

// Charger le fichier GLB
loader.load(
    'img/avatar.glb',
    function (gltf) {
        // Ajouter le modèle à la scène
        scene.add(gltf.scene);

        // Appeler la fonction d'animation une fois le modèle chargé
        animate();
    },
    undefined,
    function (error) {
        console.error(error);
    }
);

// Créez un cube
var geometry = new THREE.BoxGeometry();
var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Fonction d'animation
function animate() {
    requestAnimationFrame(animate);

    // Mettre à jour les animations ou interactions ici si nécessaire

    renderer.render(scene, camera);
}

// Appeler la fonction d'animation pour démarrer le rendu de la scène
animate();