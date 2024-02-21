






// const intervalTime = 10; // temps en millisecondes entre chaque déplacement

// function moveImage(element) {
//     return function() {
//         const step = 1 * element.direction;
//         element.position += step;
//         element.comp.style.left = element.position + 'px';
//         if (element.position >= (window.innerWidth + 120) - element.comp.clientWidth) {
//             element.direction = -1; // Changement de direction
//         } else if (element.position <= 0) {
//             element.direction = 1; // Changement de direction
//         }
//     };
// }

// // Définition de l'intervalle pour chaque élément
// for (const element of elements) {
//     setInterval(moveImage(element), intervalTime);
// }











/* CANVAS *//*
var canvas = document.getElementById('myCanvas')
var scene = new THREE.Scene()
var camera = new THREE.PerspectiveCamera(75, canvas.width / canvas.height, 0.1, 1000)
camera.position.x = 0.15
camera.position.y = 1.65
camera.position.z = 0.4
var renderer = new THREE.WebGLRenderer({ canvas: canvas })
renderer.setSize(canvas.width, canvas.height)
const pointLight = new THREE.PointLight(0xffffff, 10)

pointLight.position.set(0, 5, 5)

scene.add(pointLight)



const loader = new THREE.GLTFLoader();
let avatar, neck, waist

loader.load('./img/av.glb', function (gltf) {
    avatar = gltf.scene;
    scene.add(avatar);

});



// Start animation
function animate() {
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
animate();
*/