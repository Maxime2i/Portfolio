/* CANVAS */

function loadCanvas(){
    var canvas = document.getElementById('myCanvas')
    canvas.width = window.innerWidth / 4
    canvas.height = window.innerHeight / 2.5
    var scene = new THREE.Scene()
    var camera = new THREE.PerspectiveCamera(75, canvas.width / canvas.height, 0.1, 1000)
    camera.position.x = 0
    camera.position.y = 1.65
    camera.position.z = 0.4
    var renderer = new THREE.WebGLRenderer({ canvas: canvas })
    renderer.setSize(canvas.width, canvas.height)

    var ambientLight = new THREE.AmbientLight(0x404040, 3)
    scene.add(ambientLight)

    const loader = new THREE.GLTFLoader();
    let avatar
    let Neck
    let RightEye
    let LeftEye
    
    loader.load('./img/avatar.glb', function (gltf) {
        avatar = gltf.scene
        scene.add(avatar)
        Neck = trouverElement(avatar, 'Neck')
        RightEye = trouverElement(avatar, 'RightEye')
        LeftEye = trouverElement(avatar, 'LeftEye')
    });
    
    function animate() {
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    }
    animate();
    
  

function gestionMouvementSouris(event) {
      const x = event.clientX
      const y = event.clientY

      if (Neck){
        moveJoint(x, y, Neck, 25)
        moveJoint(x, y, RightEye, 15)
        moveJoint(x, y, LeftEye, 15)
      }
    }  
    window.addEventListener('mousemove', gestionMouvementSouris);




function moveJoint(x, y, joint, degreeLimit) {
    let degrees = getMouseDegrees(x, y, degreeLimit);
    joint.rotation.y = THREE.Math.degToRad(degrees.x);
    joint.rotation.x = THREE.Math.degToRad(degrees.y);
}
  
  
  
function getMouseDegrees(x, y, degreeLimit) {
    let dx = 0,
        dy = 0,
        xdiff,
        xPercentage,
        ydiff,
        yPercentage;

        var rect = canvas.getBoundingClientRect();
        var offsetX = rect.left + window.scrollX;
        var offsetY = rect.top + window.scrollY;
        
        var canvasWidth = canvas.width;
        var canvasHeight = canvas.height;
        
        var centreX = offsetX + canvasWidth / 2;
        var centreY = offsetY - canvasHeight / 2;

    if (x <= centreX) { 
        xdiff = centreX - x
        xPercentage = (xdiff / (centreX)) * 100
        dx = ((degreeLimit * xPercentage) / 100) * -1
}
    if (x >= centreX) {
        xdiff = x - centreX;
        xPercentage = (xdiff / (centreX)) * 100
        dx = (degreeLimit * xPercentage) / 100
}
    if (y <= centreY) {
        ydiff = centreY - y
        yPercentage = (ydiff / (centreY)) * 100
        dy = (((degreeLimit * 0.5) * yPercentage) / 100) * -1
}
    
    if (y >= centreY) {
        ydiff = y - centreY
        yPercentage = (ydiff / (centreY)) * 100
        dy = (degreeLimit * yPercentage) / 100
}
    return { x: dx, y: dy }
}
}




  
  function trouverElement(parent, nomElement) {
      let elementTrouve = null;
      parent.traverse(function (child) {
          if (child.name === nomElement) {
              elementTrouve = child;
          }
      });
      return elementTrouve
  }
  















/* MENUS */
let menuApropos 
let menuProjets
let menuCompetences
let menuEtudes
let menuContact

function menu(){
    const btnMenu = document.querySelector('.btn-menu')
    btnMenu.addEventListener('click', function() {
        document.querySelector('.menu').classList.toggle('open');
        document.querySelector('.btn-menu').classList.toggle('open');
    });

    const btnClose = document.querySelector('.btn-close')
    btnClose.addEventListener('click', function() {
        document.querySelector('.menu').classList.remove('open');
        document.querySelector('.btn-menu').classList.remove('open');

    });

    menuApropos = document.querySelector('.m-apropos')
    menuProjets = document.querySelector('.m-projets')
    menuCompetences = document.querySelector('.m-competences')
    menuEtudes = document.querySelector('.m-etudes')
    menuContact = document.querySelector('.m-contact') 
}



let oneTime = 0
let language = 0
// English and French Text
const headerFR = `<header class="header">
    <div class="name"> 
        <div class="prenom">Maxime</div>
        <div class="nom">Langlois</div>
    </div>
    <button class="btn-menu">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
    </button>
    <div class="menu">
        <ul>
            <li class="close"><button class="btn-close">
            <div class="cross cross1"></div>
            <div class="cross cross2"></div>
            </button></li>
            <li class="m"><a href="#/about" class="m-apropos">A propos</a></li>
            <li class="m"><a href="#/projects" class="m-projets">Projets</a></li>
            <li class="m"><a href="#/skills" class="m-competences">Competences</a></li>
            <li class="m"><a href="#/studies" class="m-etudes">Etudes</a></li>
            <li class="m"><a href="#/contact" class="m-contact">Contact</a></li>
            <li class="optionBtn"><img id="imgTheme" class="icon m-contact" src="img/brightness.png" alt="Change Theme"></li>
            <li class="optionBtn"><img id="imgLanguage" class="icon m-contact" src="img/language.png" alt="Change Language"></li> 
                
            
        </ul>
    </div>
    
</header>`
const headerEN = `<header class="header">
<div class="name"> 
    <div class="prenom">Maxime</div>
    <div class="nom">Langlois</div>
</div>
<button class="btn-menu">
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
</button>
<div class="menu">
    <ul>
        <li class="close"><button class="btn-close">
        <div class="cross cross1"></div>
        <div class="cross cross2"></div>
        </button></li>
        <li class="m"><a href="#/about" class="m-apropos">About</a></li>
        <li class="m"><a href="#/projects" class="m-projets">Projects</a></li>
        <li class="m"><a href="#/skills" class="m-competences">Skills</a></li>
        <li class="m"><a href="#/studies" class="m-etudes">Studies</a></li>
        <li class="m"><a href="#/contact" class="m-contact">Contact</a></li>
        <li class="optionBtn"><img id="imgTheme" class="icon m-contact" src="img/brightness.png" alt="Change Theme"></li>
        <li class="optionBtn"><img id="imgLanguage" class="icon m-contact" src="img/language.png" alt="Change Language"></li> 
            
        
    </ul>
</div>
</header>`
const homePageFR = `
<section class="homePage">
    <div class="homePage-name">Maxime Langlois</div>
    <a href="#/about" class="homePage-a"><button class="homePage-btn">Me découvrir</button></a>
</section>`
const homePageEN = `
<section class="homePage">
    <div class="homePage-name">Maxime Langlois</div>
    <a href="#/about" class="homePage-a"><button class="homePage-btn">Discover me</button></a>
</section>`
const aboutFR = `
<section id="Apropos" class="apropos">
    <div class="text">
    <h2 class="title">A propos</h2>
        <div class="text-apropos">
        Bonjour et bienvenue sur mon portfolio. Je suis Maxime Langlois, âgé de 21 ans et originaire de Normandie.<br><br>

        Ma passion pour l’informatique et les sciences m'a conduit à suivre un cursus en sciences au lycée. Après l'obtention de mon baccalauréat, j'ai poursuivi mes études à l'IUT de Rouen, où j'ai principalement étudié les sciences pendant deux ans. En quête de ma voie, j'ai participé à <em class="impt">la piscine de l’école 42 en Mars 2023</em>, une expérience qui a révélé ma passion pour la programmation. Ainsi, j'ai entamé mon tronc commun à 42 Le Havre.<br><br>
        
        Au cours de ce tronc commun, j'ai approfondi mes connaissances en développement et découvert de nouvelles technologies, notamment le C et le C++, ainsi que le développement web avec HTML, CSS et JavaScript. J'ai participé à <em class="impt">plusieurs projets d'équipe</em> qui m'ont permis de mettre en pratique mes compétences et de les enrichir. À l'avenir, j'ai l'intention de me spécialiser davantage dans le développement web.<br><br>
        
        Pour en savoir plus sur mes compétences, mes projets et pour me contacter, n'hésitez pas à explorer ce site et à me donner vos retours. Vous pouvez consulter mon CV en cliquant sur le lien suivant: <a class="CV" href="img/CV-Langlois-Maxime.pdf" download>Accéder au CV</a>.<br><br>
        
        Bonne lecture et à bientôt.<br>
        </div>
    </div>
    <canvas id="myCanvas" class="canvas" width="600px"></canvas>
    <img class="profilPicture" src="img/me.png" alt="profil picture">
</section>`
const aboutEN = `
<section id="Apropos" class="apropos">
    <div class="text">
    <h2 class="title">A propos</h2>
        <div class="text-apropos">
        Hello and welcome to my portfolio. My name is Maxime Langlois, I am 21 years old, and I am from Normandy.<br><br>

        Being passionate about computer science and sciences for many years, I naturally pursued a Scientific Baccalaureate in high school. After obtaining my baccalaureate, I joined the IUT of Rouen, where I mainly studied sciences for 2 years. Then, seeking my path, in March 2023, I attended <em class="impt">the piscine of the school 42</em> which revealed my passion for coding. Thus, I started my common core at 42 Le Havre.<br><br>
        
        During this common core, I deepened my knowledge in development and discovered new technologies, primarily C and C++, as well as web development with HTML, CSS, and JavaScript. I participated in <em class="impt">several team projects</em> that allowed me to apply and enrich my skills. Later on, I plan to specialize further in web development.<br><br>
        
        If you want to know more about me, my skills, and my various projects, or simply how to contact me, feel free to explore this site and give me feedback. You can view my CV by clicking on the following link: <a class="CV" href="img/CV-Langlois-Maxime.pdf" download> Access the CV</a>.<br><br>
        
        Happy reading and see you soon.<br>
        </div>
    </div>
    <canvas id="myCanvas" class="canvas" width="600px"></canvas>
</section>`
const projectsFR = `
<section id="Projets" class="projets">
    <h2 class="title">Projets</h2>
    <div class="portfolio-projet">
        <div class="portfolio-projet-text">
        <h3>Portfolio</h3>
        À la conclusion de mon tronc commun à 42 Le Havre, j'ai créer mon premier portfolio afin de mettre à l'épreuve mes compétences en développement web frontend. Pour ce faire, j'ai utilisé <em class="impt">HTML, CSS, JavaScript</em> ainsi que le framework <em class="impt">Three.js</em> (pour intégrer mon avatar créé avec Ready-Player-Me). Ce projet m'a offert une expérience enrichissante où j'ai pris plaisir à concevoir et à coder. De plus, j'ai acquis des compétences en matière de conception responsive afin de garantir l'accessibilité de mon portfolio sur tous les types d'écrans. J'ai également découvert des outils facilitant le déploiement de sites web en ligne, tels que Vercel.<br><a class="lienProjet" href="https://github.com/Maxime2i/Portfolio">Git</a> - <a class="lienProjet" href="https://maximelanglois.vercel.app/">Website</a>
        </div>
        <img class="portfolio-projet-image" src="/img/portfolio.png" alt="portfolio-projet-image" width="300" height="200">
    </div>
    <div class="ft_transcendance-projet">
        <img class="ft_transcendance-projet-image" src="/img/transcendence.png" alt="ft_transcendance-projet-image" width="300" height="200">
        <div class="ft_transcendance-projet-text">
        <h3>ft_transcendence</h3>
        Dans ce projet, nous avons conçu une application Web SPA permettant de jouer au célèbre jeu Pong et d'interagir avec d'autres utilisateurs. Nous avons opté pour la mise en place d'un backend et d'un frontend. Le backend a été développé en utilisant <em class="impt">Python Django</em>, avec une base de données <em class="impt">MySQL</em>, et le projet a été <em class="impt">dockerisé</em> pour faciliter sa gestion. Pour ma part, j'ai été chargé de la partie frontend, pour laquelle j'ai choisi d'utiliser le framework <em class="impt">React.js</em>. De plus, j'ai décidé d'implémenter le jeu en 3D en utilisant le framework <em class="impt">Three.js</em>. Pour combiner ces deux frameworks, j'ai utilisé la librairie <em class="impt">React-Three-Fiber</em>.<br><a class="lienProjet" href="https://github.com/Maxime2i/ft_transcendence">Git (uniquement frontend pour le moment)</a> - <a class="lienProjet" href="https://ft-transcendence-frontend.vercel.app/">Website</a>
    </div></div>
    <div class="ft_irc-projet">
        <div class="ft_irc-projet-text">
        <h3>ft_irc</h3>
        Dans ce projet réalisé en duo, nous avons dû recoder un serveur <em class="impt">IRC</em> en C++. Il m'a offert une compréhension approfondie des connexions réseau et de la synchronisation des messages grâce aux sockets, enrichissant ainsi mes compétences en programmation orientée réseau. C'était mon premier projet d'importance en <em class="impt">C++</em>, ce qui constituait un défi pour utiliser les classes de manière intelligente et optimisée. Enfin, la gestion des canaux de discussion et des fonctionnalités avancées telles que les droits d'accès et les privilèges m'ont permis de développer ma logique de développement tout en explorant des aspects complexes de la programmation.<br><a class="lienProjet" href="https://github.com/Maxime2i/ft_irc">Git</a>
        </div>
        <img class="ft_irc-projet-image" src="/img/ft_irc.png" alt="ft_irc-projet-image" width="300" height="200">
    </div>
</section>`
const projectsEN = `
<section id="Projets" class="projets">
    <h2 class="title">Projets</h2>
    <div class="portfolio-projet">
        <div class="portfolio-projet-text">
        <h3>Portfolio</h3>
        At the conclusion of my core curriculum at 42 Le Havre, I created my first portfolio to put my frontend web development skills to the test. To accomplish this, I utilized <em class="impt">HTML, CSS, JavaScript</em> and the <em class="impt">Three.js</em> framework (to integrate my avatar created with Ready-Player-Me). This project provided me with a rewarding experience where I enjoyed both designing and coding. Additionally, I gained skills in responsive design to ensure accessibility of my portfolio across all screen types. I also discovered tools that facilitate online website deployment, such as Vercel.<br><a class="lienProjet" href="https://github.com/Maxime2i/Portfolio">Git</a> - <a class="lienProjet" href="https://maximelanglois.vercel.app/">Website</a>
        </div>
        <img class="portfolio-projet-image" src="/img/portfolio.png" alt="portfolio-projet-image" width="300" height="200">
    </div>
    <div class="ft_transcendance-projet">
        <img class="ft_transcendance-projet-image" src="/img/transcendence.png" alt="ft_transcendance-projet-image" width="300" height="200">
        <div class="ft_transcendance-projet-text">
        <h3>ft_transcendence</h3>
        In this project, we created a SPA Web application where users can play the famous Pong game and interact with each other. We decided to set up both a backend and a frontend. The backend was built using <em class="impt">Python Django</em>, with <em class="impt">MySQL</em> as the database, and the project was <em class="impt">dockerized</em>. As for me, I was responsible for the frontend part, and for that, I chose to use the <em class="impt">React.js</em> framework. I also opted to implement the game in 3D using the <em class="impt">Three.js</em> framework. To integrate these two frameworks, I used the <em class="impt">React-Three-Fiber</em> library.<br><a class="lienProjet" href="https://github.com/Maxime2i/ft_transcendence">Git (only frontend at the moment)</a> - <a class="lienProjet" href="https://ft-transcendence-frontend.vercel.app/">Website</a>
    </div></div>
    <div class="ft_irc-projet">
        <div class="ft_irc-projet-text">
        <h3>ft_irc</h3>
        In this project undertaken as a duo, we had to recode an <em class="impt">IRC</em> server in C++. It provided me with a thorough understanding of network connections and message synchronization through sockets, thus enhancing my skills in network-oriented programming. It was my first significant project in <em class="impt">C++</em>, posing a challenge to use classes intelligently and efficiently. Lastly, managing discussion channels and advanced features such as access rights and privileges allowed me to develop my programming logic while delving into complex aspects of programming.<br><a class="lienProjet" href="https://github.com/Maxime2i/ft_irc">Git</a>
        </div>
        <img class="ft_irc-projet-image" src="/img/ft_irc.png" alt="ft_irc-projet-image" width="300" height="200">
    </div>
</section>`
const skillsFR = `
<section id="Competences" class="competences">
    <div class="text">
    <h2 class="title">Competences</h2>
    
    <div class="logo">
        <div><a href="https://fr.wikipedia.org/wiki/Hypertext_Markup_Language"><img src="/img/html.png" alt="html" width="100" height="100" id="comp1" class="logo1"></a></div>
        <div><a href="https://fr.wikipedia.org/wiki/Feuilles_de_style_en_cascade"><img src="/img/css.png" alt="html" width="100" height="100" id="comp2" class="logo2"></a></div> 
        <div><a href="https://fr.wikipedia.org/wiki/JavaScript"><img src="/img/js.png" alt="html" width="100" height="100" id="comp3" class="logo3"></a></div> 
        <div><a href="https://fr.wikipedia.org/wiki/React"><img src="/img/react.png" alt="html" width="100" height="100" id="comp5" class="logo5"></a></div> 
        <div><a href="https://en.wikipedia.org/wiki/Three.js"><img src="/img/three.png" alt="html" width="100" height="100" id="comp4" class="logo4"></a></div> 
        <div><a href="https://fr.wikipedia.org/wiki/C_(langage)"><img src="/img/c.png" alt="html" width="100" height="100" id="comp6" class="logo6"></a></div> 
        <div><a href="https://fr.wikipedia.org/wiki/C%2B%2B"><img src="/img/c++.png" alt="html" width="100" height="100" id="comp7" class="logo7"></a></div>
        <div><a href="https://fr.wikipedia.org/wiki/Git"><img src="/img/git.png" alt="html" width="100" height="100" id="comp8" class="logo8"></a></div> 
        <div><a href="https://fr.wikipedia.org/wiki/Linux"><img src="/img/linux.jpg" alt="html" width="100" height="100" id="comp9" class="logo9"></a></div> 
    </div>
</div>
</section>`
const skillsEN = `
<section id="Competences" class="competences">
    <div class="text">
    <h2 class="title">Competences</h2>
    
    <div class="logo">
        <div><a href="https://fr.wikipedia.org/wiki/Hypertext_Markup_Language"><img src="/img/html.png" alt="html" width="100" height="100" id="comp1" class="logo1"></a></div>
        <div><a href="https://fr.wikipedia.org/wiki/Feuilles_de_style_en_cascade"><img src="/img/css.png" alt="html" width="100" height="100" id="comp2" class="logo2"></a></div> 
        <div><a href="https://fr.wikipedia.org/wiki/JavaScript"><img src="/img/js.png" alt="html" width="100" height="100" id="comp3" class="logo3"></a></div> 
        <div><a href="https://fr.wikipedia.org/wiki/React"><img src="/img/react.png" alt="html" width="100" height="100" id="comp5" class="logo5"></a></div> 
        <div><a href="https://en.wikipedia.org/wiki/Three.js"><img src="/img/three.png" alt="html" width="100" height="100" id="comp4" class="logo4"></a></div> 
        <div><a href="https://fr.wikipedia.org/wiki/C_(langage)"><img src="/img/c.png" alt="html" width="100" height="100" id="comp6" class="logo6"></a></div> 
        <div><a href="https://fr.wikipedia.org/wiki/C%2B%2B"><img src="/img/c++.png" alt="html" width="100" height="100" id="comp7" class="logo7"></a></div>
        <div><a href="https://fr.wikipedia.org/wiki/Git"><img src="/img/git.png" alt="html" width="100" height="100" id="comp8" class="logo8"></a></div> 
        <div><a href="https://fr.wikipedia.org/wiki/Linux"><img src="/img/linux.jpg" alt="html" width="100" height="100" id="comp9" class="logo9"></a></div> 
    </div>
</div>
</section>`
const schoolFR = `
<section id="Etudes" class="etudes">
    <div class="text1">
    <h2 class="title">Etudes</h2>
    <div class="text2">
    <div class="school">
        <div class="school1">
            <div class="img-container3">
                <img src="/img/lycee.jpg" alt="lycee" class="img-school3-1">
                <img src="/img/vuelycee.jpg" alt="vue lycee" class="img-school3-2">
            </div>
            <div class="school-div3">
                <h3 class="school-title-3">Lycee Jehan Ango</h3>
                <p class="school-text-3">
                J'ai obtenu mon baccalauréat scientifique au lycée Jehan Ango, où j'ai suivi mes études de la seconde à la terminale. Durant cette période, j'ai acquis des connaissances en mathématiques, en physique, ainsi qu'en anglais et en espagnol.</p>
            </div>
        </div> 
        <div class="school2">
            <div class="img-container2">
                <img src="/img/iut.jpg" alt="iut" class="img-school2-1">
                <img src="/img/vueiut.jpg" alt="vue iut" class="img-school2-2">
            </div>
            <div class="school-div2">
                <h3 class="school-title-2">IUT de Rouen</h3>
                <p class="school-text-2">Pendant deux ans, j'ai suivi des cours à l'IUT de Rouen, où j'ai suivi une année de DUT en Génie Chimique Génie des Procédés, suivie d'une année en BUT en Mesure Physique. C'est là que j'ai été exposé pour la première fois aux cours d'informatique, où j'ai découvert les bases du langage C++.</p>
            </div>
        </div>
        <div class="school3">
            <div class="img-container1">
                <img src="/img/42lh.png" alt="42LeHavre" class="img-school1-1">
                <img src="/img/vue42.png" alt="vue42" class="img-school1-2">
            </div>
            <div class="school-div1">
            <h3 class="school-title-1">42 Le Havre</h3>
            <p class="school-text-1">C'est à la piscine de 42 que j'ai découvert ma passion pour la programmation, où j'ai passé un mois à m'amuser tout en apprenant intensivement le langage C. Par la suite, j'ai été sélectionné pour rejoindre la première promotion à l'école du Havre, où j'ai suivi le tronc commun et acquis des compétences en C, C++, en utilisation de machines virtuelles, de dockers, ainsi que dans le domaine du développement web.</p>
            </div>
            
        </div>
    </div>
    </div>
    </div>
</section>`
const schoolEN = `
<section id="Etudes" class="etudes">
    <div class="text1">
    <h2 class="title">Etudes</h2>
    <div class="text2">
    <div class="school">
        <div class="school1">
        <div class="img-container3">
        <img src="/img/lycee.jpg" alt="lycee" class="img-school3-1">
        <img src="/img/vuelycee.jpg" alt="vue lycee" class="img-school3-2">
        </div>
        <div class="school-div3">
            <h3 class="school-title-3">Lycee Jehan Ango</h3>
            <p class="school-text-3">I completed my Scientific Baccalaureate at Jehan Ango High School. During this time, I gained knowledge in mathematics, physics, as well as English and Spanish.</p>
        </div>
        </div> 
    <div class="school2">
        <div class="img-container2">
            <img src="/img/iut.jpg" alt="iut" class="img-school2-1">
            <img src="/img/vueiut.jpg" alt="vue iut" class="img-school2-2">
        </div>
        <div class="school-div2">
            <h3 class="school-title-2">IUT de Rouen</h3>
            <p class="school-text-2">During two years, I attended courses at the IUT of Rouen, where I completed one year of DUT in Chemical Engineering Process Engineering, followed by one year in a BUT in Physical Measurement. It was there that I was first exposed to computer science courses, where I discovered the basics of the C++ language.</p>
        </div>
    </div>
    <div class="school3">
        <div class="img-container1">
            <img src="/img/42lh.png" alt="42LeHavre" class="img-school1-1">
            <img src="/img/vue42.png" alt="vue42" class="img-school1-2">
        </div>
        <div class="school-div1">
        <h3 class="school-title-1">42 Le Havre</h3>
        <p class="school-text-1">It was at the 42 swimming pool where I discovered my passion for coding and spent a month having fun while learning as much as possible about the C language. I was then selected to join the first cohort at Le Havre, where I completed my core curriculum and learned C, C++, virtual machines, Docker, and web development.</p>
        </div>
    </div>
    </div>
    </div>
    </div>
</section>`
const contactFR = `
<section id="Contact" class="contact">
<div class="text1">
    <h2 class="title">Contact</h2>
    <div class="text2">
    <div class="text3">
    <div class="info">
        <div class="meRetrouver">Me contacter :</div>
        <div class="logos">
        <div><a class="img-logo" href="mailto:maxime.lngls21@gmail.com"><img src="/img/e-mail.png" alt="e-mail" width="50" height="50"></a></div> 
        <div><a class="img-logo" href="https://wa.me/qr/I4Z35GGHL7SZA1"><img src="/img/whatsapp.png" alt="whatsapp" width="50" height="50"></a></div> 
        <div><a class="img-logo" href="https://www.linkedin.com/in/maxime-langlois-21-/"><img src="/img/linkedin.png" alt="linkedin" width="50" height="50"></a></div> 
        <div><a class="img-logo" href="https://github.com/Maxime2i"><img src="/img/github.png" alt="github" width="50" height="50"></a></div>
    </div>
    </div>
    <form class="message" id="messageForm" action="https://formspree.io/f/xwkgbqzv" method="POST">
        <input name="name" type="text" class=" input input1" placeholder="Entrer votre nom">
        <input name="email" type="email" class=" input input2" placeholder="Entrer votre adresse mail">
        <textarea name="message" class=" input input3" placeholder="Entrer votre message"></textarea>
        <Button class="btnSubmit" type="submit">Soumettre</Button>
    </form>
</div>
</div>
</div>
</section>`
const contactEN = `
<section id="Contact" class="contact">
<div class="text1">
    <h2 class="title">Contact</h2>
    <div class="text2">
    <div class="text3">
    <div class="info">
        <div class="meRetrouver">Contact me :</div>
        <div class="logos">
        <div><a class="img-logo" href="mailto:maxime.lngls21@gmail.com"><img src="/img/e-mail.png" alt="e-mail" width="50" height="50"></a></div> 
        <div><a class="img-logo" href="https://wa.me/qr/I4Z35GGHL7SZA1"><img src="/img/whatsapp.png" alt="whatsapp" width="50" height="50"></a></div> 
        <div><a class="img-logo" href="https://www.linkedin.com/in/maxime-langlois-21-/"><img src="/img/linkedin.png" alt="linkedin" width="50" height="50"></a></div> 
        <div><a class="img-logo" href="https://github.com/Maxime2i"><img src="/img/github.png" alt="github" width="50" height="50"></a></div>
    </div>
    </div>
    <form class="message" id="messageForm" action="https://formspree.io/f/xwkgbqzv" method="POST">
        <input name="name" type="text" class=" input input1" placeholder="Enter your Name">
        <input name="email" type="email" class=" input input2" placeholder="Enter your email adress">
        <textarea name="message" class=" input input3" placeholder="Enter your message"></textarea>
        <Button class="btnSubmit" type="submit">Submit</Button>
    </form>
</div>
</div>
</div>
</section>`



let theme = 0
function changeTheme() {
      if (theme === 0){
        document.documentElement.style.setProperty('--background', '#f5f5f5')
        document.documentElement.style.setProperty('--write', 'black')
        document.documentElement.style.setProperty('--contact', '#6c2191')
        theme = 1
      } else {
        document.documentElement.style.setProperty('--background', 'black')
        document.documentElement.style.setProperty('--write', 'white')
        document.documentElement.style.setProperty('--contact', '#35064b')
        theme = 0;
    }
}

let clickAutorise = true
function translateTo(){
    if (clickAutorise === true){
        if (language === 0)
            language = 1
        else 
            language = 0
    handleRouting()
    }
  }

function setMenu(){

    const headerDiv = document.getElementById('header');
    if (language === 0)
        headerDiv.innerHTML = headerFR
    else
        headerDiv.innerHTML = headerEN
    
    if (oneTime === 0){
        animMenu()
        oneTime++
    } else {
        var header = document.querySelector('.header')
        header.style.left = '0%'
    }
    
}



/* ROUTES */
function handleRouting() {
  const path = window.location.hash.substring(1)
  const contentDiv = document.getElementById('content');
  const headerDiv = document.getElementById('header');
  if (path === ''){
    if (language === 0)
        headerDiv.innerHTML = headerFR
    else
        headerDiv.innerHTML = headerEN

    if (language === 0)
        contentDiv.innerHTML =  homePageFR
    else
        contentDiv.innerHTML =  homePageEN
    document.querySelector('.menu').classList.add('invisible')
  } else {

    setMenu()
    document.getElementById('imgLanguage').addEventListener('click', function() {
        translateTo()
    });
    document.getElementById('imgTheme').addEventListener('click', function() {
        changeTheme()
    });
    menu()
    menuApropos.classList.remove('anime')
    menuProjets.classList.remove('anime')
    menuCompetences.classList.remove('anime')
    menuEtudes.classList.remove('anime')
    menuContact.classList.remove('anime')
    document.querySelector('.menu').classList.remove('open');
    document.querySelector('.btn-menu').classList.remove('open');
    switch(path) {
      case '/about':
        menuApropos.classList.add('anime') 
        if (language === 0)
            changeColor(aboutFR, true)
        else
            changeColor(aboutEN, true)
        break;
      case '/projects':
        menuProjets.classList.add('anime')
        if (language === 0)
            changeColor(projectsFR, false)
        else
            changeColor(projectsEN, false)
        break;
      case '/skills':
        menuCompetences.classList.add('anime')
        if (language === 0)
            changeColor(skillsFR, false)
        else
            changeColor(skillsEN, false)
        break;
      case '/studies':
        menuEtudes.classList.add('anime')
        if (language === 0)
            changeColor(schoolFR, false)
        else
            changeColor(schoolEN, false)
        break;
      case '/contact':
        menuContact.classList.add('anime')
        if (language === 0)
            changeColor(contactFR, false)
        else
            changeColor(contactEN, false)
        break;
      default:
        contentDiv.innerHTML = '<h2>Page Not Found</h2>';
    }
  }
  
}

handleRouting();
window.onpopstate = handleRouting;



function changeColor(contenu, isCanvas) {
    var transition = document.getElementById("transition")
    var content = document.getElementById("content")
    var lien1 = document.querySelector('.m-apropos')
    var lien2 = document.querySelector('.m-projets')
    var lien3 = document.querySelector('.m-competences')
    var lien4 = document.querySelector('.m-etudes')
    var lien5 = document.querySelector('.m-contact')

    clickAutorise = false
    lien1.style.pointerEvents = 'none'
    lien2.style.pointerEvents = 'none'
    lien3.style.pointerEvents = 'none'
    lien4.style.pointerEvents = 'none'
    lien5.style.pointerEvents = 'none'

    transition.classList.add('active1')

    transition.addEventListener("animationend", function() {
        content.innerHTML = contenu
        if (isCanvas)
            loadCanvas()
        transition.classList.remove("active1");
        transition.style.height = "100%"
        transition.classList.add('active2')
        transition.addEventListener("animationend", function() {
            transition.classList.remove("active2");
            clickAutorise = true
            lien1.style.pointerEvents = 'auto'
            lien2.style.pointerEvents = 'auto'
            lien3.style.pointerEvents = 'auto'
            lien4.style.pointerEvents = 'auto'
            lien5.style.pointerEvents = 'auto'
        }, { once: true });
        transition.style.height = "0%"
    }, { once: true });
}


function animMenu() {
    var header = document.querySelector(".header");
    document.querySelector('.menu').classList.add('invisible')
    gsap.to(header, { 
        duration: 2,
        left: "0%",
        ease: "power1.inOut",
        onComplete: function(){
            document.querySelector('.menu').classList.remove('invisible')
        },
    });
}
