



















function handleRouting() {
  const path = window.location.hash.substring(1)
  const contentDiv = document.getElementById('content');
console.log(path)
  switch(path) {
    case '':
      contentDiv.innerHTML = '<h2>Home Page</h2>';
      break;
    case '/apropos':
      contentDiv.innerHTML = `
      <section id="Apropos" class="apropos">
          <div class="text">
          <h2 class="title">A propos</h2>
              <div class="text-apropos">
                  Bonjour ! Je m'appelle Maxime et je suis étudiant à l'école 42, passionné par le développement web. Fort de mes connaissances et de mon enthousiasme pour ce domaine, je suis <em class="impt-apropos">à la recherche d'un stage</em> enrichissant qui me permettra de mettre en pratique mes compétences et d'approfondir mes connaissances. Ma <em class="impt-apropos">formation à l'école 42</em> m'a permis d'acquérir une solide base en programmation et de développer des compétences en résolution de problèmes. Je suis motivé, créatif et toujours prêt à relever de nouveaux défis. Je suis convaincu que ce stage sera une opportunité parfaite pour moi de contribuer efficacement à votre équipe et de continuer à <em class="impt-apropos">apprendre et à évoluer</em> dans le domaine du développement web.
              </div>
          </div>
          <canvas id="myCanvas" class="canvas" width="600px" height="450px"></canvas>
      </section>`
      break;
    case '/projets':
      contentDiv.innerHTML = `
      <section id="Projets" class="projets">
          <h2 class="title">Projets</h2>
          <div class="portfolio-projet">
              <div class="portfolio-projet-text">
              <h3>Portfolio</h3>
              À la fin de mon tronc commun a 42 Le Havre, j'ai reu mon premier portfolio pour tester mes connaissances en développement web frontend. J'ai donc réalisé celui-ci en utilisant HTML, CSS, Javascript et son freamework Three.js (pour ajouter mon avatar créée avec Ready-Player-Me). C'est un projet où j'ai pris plaisir à désigner et coder. J'ai également appris à coder en responsive pour que celui-ci soit accessible sur tous types d'écrans et a trouvé des moyens pour déployer des sites en lignes assez simplement, ici en utilisant Vercel.
              </div>
              <img class="portfolio-projet-image" src="/img/portfolio.png" alt="portfolio-projet-image" width="300" height="200">
          </div>
          <div class="ft_transcendance-projet">
              <img class="ft_transcendance-projet-image" src="/img/transcendence.png" alt="ft_transcendance-projet-image" width="300" height="200">
              <div class="ft_transcendance-projet-text">
              <h3>ft_transcendence</h3>
              Dans ce projet, nous avons eu le défi de créer une application Web SPA sur lequel vous pouvez jouer au célèbre jeu pong et interagir avec d'autres utilisateurs. Nous pouvions personnaliser le projet selon nos envies en choisissant nous-mêmes quels modules mous implémenterons. Donc nous avons decider de mettre en place un backend et un frontend. Le backend a ete fait à l'aide de Python Django, la base de données avec MySQL et le projet a été dockerise.
              Pour ma part, j'ai été en charge de la partie frontend, et pour cela j'ai decider d'utiliser le framework React.js. J'ai aussi choisi d'implementer le jeu en 3D en utilisant le freamework Three.js, pour associer ces 2 frameworks j'ai utilise la librairie React-Three-Fiber.    </div>
          </div>
      </section>`
      break;
    case '/competences':
      contentDiv.innerHTML = `
      <section id="Competences" class="competences">
          <div class="text">
          <h2 class="title">Competences</h2>
          
          <div class="logo">
              <div><a href="https://fr.wikipedia.org/wiki/Hypertext_Markup_Language"><img src="/img/html.png" alt="html" width="100" height="100" id="comp1" class="logo1"></a></div>
              <div><a href="https://fr.wikipedia.org/wiki/Feuilles_de_style_en_cascade"><img src="/img/css.png" alt="html" width="100" height="100" id="comp2" class="logo2"></a></div> 
              <div><a href="https://fr.wikipedia.org/wiki/JavaScript"><img src="/img/js.png" alt="html" width="100" height="100" id="comp3" class="logo3"></a></div> 
              <div><a href="https://en.wikipedia.org/wiki/Three.js"><img src="/img/three.png" alt="html" width="100" height="100" id="comp4" class="logo4"></a></div> 
              <div><a href="https://fr.wikipedia.org/wiki/React"><img src="/img/react.png" alt="html" width="100" height="100" id="comp5" class="logo5"></a></div> 
              <div><a href="https://fr.wikipedia.org/wiki/C_(langage)"><img src="/img/c.png" alt="html" width="100" height="100" id="comp6" class="logo6"></a></div> 
              <div><a href="https://fr.wikipedia.org/wiki/C%2B%2B"><img src="/img/c++.png" alt="html" width="100" height="100" id="comp7" class="logo7"></a></div>
              <div><a href="https://fr.wikipedia.org/wiki/Git"><img src="/img/git.png" alt="html" width="100" height="100" id="comp8" class="logo8"></a></div> 
              <div><a href="https://fr.wikipedia.org/wiki/Linux"><img src="/img/linux.jpg" alt="html" width="100" height="100" id="comp9" class="logo9"></a></div> 
          </div>
      </div>
      </section>`
      break;
    case '/etudes':
      contentDiv.innerHTML = `
      <section id="Etudes" class="etudes">
          <div class="text1">
          <h2 class="title">Etudes</h2>
          <div class="text2">
          <div class="school">
              <div class="school1">
                  <div class="img-container1">
                      <img src="/img/42lh.png" alt="42LeHavre" class="img-school1-1">
                      <img src="/img/vue42.png" alt="vue42" class="img-school1-2">
                  </div>
                  <div class="school-div1">
                  <h3 class="school-title-1">42 Le Havre</h3>
                  <p class="school-text-1">Lorem  voluptatem sequi, voluptas non accusantium culpa, expedita repellendus odit. Delectus asperiores nihil temporibus excepturi?</p>
                  </div>
              </div> 
              <div class="school2">
                  <div class="img-container2">
                      <img src="/img/iut.jpg" alt="iut" class="img-school2-1">
                      <img src="/img/vueiut.jpg" alt="vue iut" class="img-school2-2">
                  </div>
                  <div class="school-div2">
                      <h3 class="school-title-2">IUT de Rouen</h3>
                      <p class="school-text-2">orro voluptatem sequi, voluptas non accusantium culpa, expedita repellendus odit. Delectus asperiores nihil temporibus excepturi?</p>
                  </div>
              </div>
              <div class="school3">
                  <div class="img-container3">
                      <img src="/img/lycee.jpg" alt="lycee" class="img-school3-1">
                      <img src="/img/vuelycee.jpg" alt="vue lycee" class="img-school3-2">
                  </div>
                  <div class="school-div3">
                      <h3 class="school-title-3">Lycee Jehan Ango</h3>
                      <p class="school-text-3">o voluptatem sequi, voluptas non accusantium culpa, expedita repellendus odit. Delectus asperiores nihil temporibus excepturi?</p>
                  </div>
              </div>
          </div>
      </section>`
      break;
    case '/contact':
      contentDiv.innerHTML = '<h2>School Page</h2>';
      break;
    default:
      contentDiv.innerHTML = '<h2>Page Not Found</h2>';
  }
}

// Initial call to handle routing
handleRouting();

// Event listener for changes in URL
window.onpopstate = handleRouting;















/* CANVAS */
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