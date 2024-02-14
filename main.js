import * as THREE from 'three'

var canvas = document.getElementById('myCanvas');

// Créez une scène
var scene = new THREE.Scene();

// Créez une caméra
var camera = new THREE.PerspectiveCamera(75, canvas.width / canvas.height, 0.1, 1000);
camera.position.z = 5;

// Créez un moteur de rendu
var renderer = new THREE.WebGLRenderer({ canvas: canvas });

// Créez un cube
var geometry = new THREE.BoxGeometry();
var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);


    renderer.render(scene, camera);
