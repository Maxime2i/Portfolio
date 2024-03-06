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
            <li class="m"><a href="#/apropos" class="m-apropos">A propos</a></li>
            <li class="m"><a href="#/projets" class="m-projets">Projets</a></li>
            <li class="m"><a href="#/competences" class="m-competences">Competences</a></li>
            <li class="m"><a href="#/etudes" class="m-etudes">Etudes</a></li>
            <li class="m"><a href="#/contact" class="m-contact">Contact</a></li>
            <li class="optionBtn"><img id="imgTheme" onClick="changeTheme()" class="icon" src="img/brightness2.png" alt="Change Theme"></li>
            <li class="optionBtn"><img id="imgLanguage" class="icon" src="img/language2.png" alt="Change Language"></li> 
                
            
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
        <li class="m"><a href="#/apropos" class="m-apropos">About</a></li>
        <li class="m"><a href="#/projets" class="m-projets">Projects</a></li>
        <li class="m"><a href="#/competences" class="m-competences">Skills</a></li>
        <li class="m"><a href="#/etudes" class="m-etudes">Studies</a></li>
        <li class="m"><a href="#/contact" class="m-contact">Contact</a></li>
        <li class="optionBtn"><img id="imgTheme" onClick="changeTheme()" class="icon" src="img/brightness2.png" alt="Change Theme"></li>
        <li class="optionBtn"><img id="imgLanguage" class="icon" src="img/language2.png" alt="Change Language"></li> 
            
        
    </ul>
</div>
</header>`
const homePageFR = `
<section class="homePage">
    <div class="homePage-name">Maxime Langlois</div>
    <a href="#/apropos" class="homePage-a"><button class="homePage-btn">Me découvrir en 3 minutes</button></a>
</section>`
const homePageEN = `
<section class="homePage">
    <div class="homePage-name">Maxime Langlois</div>
    <a href="#/apropos" class="homePage-a"><button class="homePage-btn">Discover me in 3 minutes</button></a>
</section>`
const aboutFR = `
<section id="Apropos" class="apropos">
    <div class="text">
    <h2 class="title">A propos</h2>
        <div class="text-apropos">
        Bonjour et bienvenue sur mon portfolio. Je suis Maxime Langlois, âgé de 21 ans et originaire de Normandie.<br><br>

        Ma passion pour l’informatique et les sciences m'a conduit à suivre un cursus en sciences au lycée. Après l'obtention de mon baccalauréat, j'ai poursuivi mes études à l'IUT de Rouen, où j'ai principalement étudié les sciences pendant deux ans. En quête de ma voie, j'ai participé à <em class="impt-apropos">la piscine de l’école 42 en Mars 2023</em>, une expérience qui a révélé ma passion pour la programmation. Ainsi, j'ai entamé mon tronc commun à 42 Le Havre. Actuellement, je suis à la recherche d'un <em class="impt-apropos">stage dans le développement web</em> pour finaliser ce parcours.<br><br>
        
        Au cours de ce tronc commun, j'ai approfondi mes connaissances en développement et découvert de nouvelles technologies, notamment le C et le C++, ainsi que le développement web avec HTML, CSS et JavaScript. J'ai participé à <em class="impt-apropos">plusieurs projets d'équipe</em> qui m'ont permis de mettre en pratique mes compétences et de les enrichir. À l'avenir, j'ai l'intention de me spécialiser davantage dans le développement web.<br><br>
        
        Pour en savoir plus sur mes compétences, mes projets et pour me contacter, n'hésitez pas à explorer ce site et à me donner vos retours. Vous pouvez consulter mon CV en cliquant sur le lien suivant: <a class="CV" href="img/CV-Langlois-Maxime.pdf" download>Accéder au CV</a>.<br><br>
        
        Bonne lecture et à bientôt.<br>
        </div>
    </div>
    <canvas id="myCanvas" class="canvas" width="600px"></canvas>
</section>`
const aboutEN = `
<section id="Apropos" class="apropos">
    <div class="text">
    <h2 class="title">A propos</h2>
        <div class="text-apropos">
        Hello and welcome to my portfolio. My name is Maxime Langlois, I am 21 years old, and I am from Normandy.<br><br>

        Being passionate about computer science and sciences for many years, I naturally pursued a Scientific Baccalaureate in high school. After obtaining my baccalaureate, I joined the IUT of Rouen, where I mainly studied sciences for 2 years. Then, seeking my path, in March 2023, I attended <em class="impt-apropos">the piscine of the school 42</em> which revealed my passion for coding. Thus, I started my common core at 42 Le Havre. I am currently looking for an <em class="impt-apropos">internship in web development</em> to complete this journey.<br><br>
        
        During this common core, I deepened my knowledge in development and discovered new technologies, primarily C and C++, as well as web development with HTML, CSS, and JavaScript. I participated in <em class="impt-apropos">several team projects</em> that allowed me to apply and enrich my skills. Later on, I plan to specialize further in web development.<br><br>
        
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
        À la conclusion de mon tronc commun à 42 Le Havre, j'ai créer mon premier portfolio afin de mettre à l'épreuve mes compétences en développement web frontend. Pour ce faire, j'ai utilisé <em class="impt-apropos">HTML, CSS, JavaScript</em> ainsi que le framework <em class="impt-apropos">Three.js</em> (pour intégrer mon avatar créé avec Ready-Player-Me). Ce projet m'a offert une expérience enrichissante où j'ai pris plaisir à concevoir et à coder. De plus, j'ai acquis des compétences en matière de conception responsive afin de garantir l'accessibilité de mon portfolio sur tous les types d'écrans. J'ai également découvert des outils facilitant le déploiement de sites web en ligne, tels que Vercel.
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
const projectsEN = `
<section id="Projets" class="projets">
    <h2 class="title">Projets</h2>
    <div class="portfolio-projet">
        <div class="portfolio-projet-text">
        <h3>Portfolio</h3>
        At the conclusion of my core curriculum at 42 Le Havre, I created my first portfolio to put my frontend web development skills to the test. To accomplish this, I utilized <em class="impt-apropos">HTML, CSS, JavaScript</em> and the <em class="impt-apropos">Three.js</em> framework (to integrate my avatar created with Ready-Player-Me). This project provided me with a rewarding experience where I enjoyed both designing and coding. Additionally, I gained skills in responsive design to ensure accessibility of my portfolio across all screen types. I also discovered tools that facilitate online website deployment, such as Vercel.
        <img class="portfolio-projet-image" src="/img/portfolio.png" alt="portfolio-projet-image" width="300" height="200">
    </div>
    <div class="ft_transcendance-projet">
        <img class="ft_transcendance-projet-image" src="/img/transcendence.png" alt="ft_transcendance-projet-image" width="300" height="200">
        <div class="ft_transcendance-projet-text">
        <h3>ft_transcendence</h3>
        In this project we had the challenge of creating a SPA web application on which you can play the famous pong game and interact with other users. We could customize the project according to our wishes by choosing ourselves which soft modules we would implement. So we decided to set up a backend and a frontend. The backend was made using Python Django, the database with MySQL and the project was Dockerized.
        For my part, I was in charge of the frontend part, and for this I decided to use the React.js framework. I also chose to implement the game in 3D using the Three.js framework, to combine these 2 frameworks I used the React-Three-Fiber library. </div>
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
        <div><a href="https://en.wikipedia.org/wiki/Three.js"><img src="/img/three.png" alt="html" width="100" height="100" id="comp4" class="logo4"></a></div> 
        <div><a href="https://fr.wikipedia.org/wiki/React"><img src="/img/react.png" alt="html" width="100" height="100" id="comp5" class="logo5"></a></div> 
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
        <div><a href="https://en.wikipedia.org/wiki/Three.js"><img src="/img/three.png" alt="html" width="100" height="100" id="comp4" class="logo4"></a></div> 
        <div><a href="https://fr.wikipedia.org/wiki/React"><img src="/img/react.png" alt="html" width="100" height="100" id="comp5" class="logo5"></a></div> 
        <div><a href="https://fr.wikipedia.org/wiki/C_(langage)"><img src="/img/c.png" alt="html" width="100" height="100" id="comp6" class="logo6"></a></div> 
        <div><a href="https://fr.wikipedia.org/wiki/C%2B%2B"><img src="/img/c++.png" alt="html" width="100" height="100" id="comp7" class="logo7"></a></div>
        <div><a href="https://fr.wikipedia.org/wiki/Git"><img src="/img/git.png" alt="html" width="100" height="100" id="comp8" class="logo8"></a></div> 
        <div><a href="https://fr.wikipedia.org/wiki/Linux"><img src="/img/linux.jpg" alt="html" width="100" height="100" id="comp9" class="logo9"></a></div> 
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
            <div class="img-container1">
                <img src="/img/42lh.png" alt="42LeHavre" class="img-school1-1">
                <img src="/img/vue42.png" alt="vue42" class="img-school1-2">
            </div>
            <div class="school-div1">
            <h3 class="school-title-1">42 Le Havre</h3>
            <p class="school-text-1">C'est à la piscine de 42 que j'ai découvert la passion du code et où je me suis amusé pendant un mois à apprendre le plus possible le langage C. J'ai ensuite été sélectionné pour rejoindre la première promo au Havre où j'ai éffectue mon tronc commun et appris le C, C++, les machines virtuelles, les dockers et le web.</p>
            </div>
        </div> 
        <div class="school2">
            <div class="img-container2">
                <img src="/img/iut.jpg" alt="iut" class="img-school2-1">
                <img src="/img/vueiut.jpg" alt="vue iut" class="img-school2-2">
            </div>
            <div class="school-div2">
                <h3 class="school-title-2">IUT de Rouen</h3>
                <p class="school-text-2">J'ai suivi 2 années de cours à l'IUT de Rouen (une année de DUT Genie Chimique Genie des Procédés et une année de BUT Mesure Physique), c'est ici que j'ai assisté pour la première fois à des cours d'informatiques en voyant les bases du C++.</p>
            </div>
        </div>
        <div class="school3">
            <div class="img-container3">
                <img src="/img/lycee.jpg" alt="lycee" class="img-school3-1">
                <img src="/img/vuelycee.jpg" alt="vue lycee" class="img-school3-2">
            </div>
            <div class="school-div3">
                <h3 class="school-title-3">Lycee Jehan Ango</h3>
                <p class="school-text-3">J'ai passé mon Baccaleureat Scientifique au lycée Jehan Ango ou j'ai fait de la seconde à la terminale, en apprenant notamment les mathématiques la physique et l'espagnol.</p>
            </div>
        </div>
    </div>
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
            <div class="img-container1">
                <img src="/img/42lh.png" alt="42LeHavre" class="img-school1-1">
                <img src="/img/vue42.png" alt="vue42" class="img-school1-2">
            </div>
            <div class="school-div1">
            <h3 class="school-title-1">42 Le Havre</h3>
            <p class="school-text-1">It was at the 42 swimming pool that I discovered my passion for coding and where I had fun for a month learning as much of the C language as possible. I was then selected to join the first class in Le Havre where I I completed my common core and learned C, C++, virtual machines, dockers and the web.</p>
            </div>
        </div> 
        <div class="school2">
            <div class="img-container2">
                <img src="/img/iut.jpg" alt="iut" class="img-school2-1">
                <img src="/img/vueiut.jpg" alt="vue iut" class="img-school2-2">
            </div>
            <div class="school-div2">
                <h3 class="school-title-2">IUT de Rouen</h3>
                <p class="school-text-2">I followed 2 years of courses at the IUT of Rouen (one year of DUT Chemical Engineering Process Engineering and one year of BUT Physical Measurement), it is here that I attended courses for the first time. computer science by seeing the basics of C++.</p>
            </div>
        </div>
        <div class="school3">
            <div class="img-container3">
                <img src="/img/lycee.jpg" alt="lycee" class="img-school3-1">
                <img src="/img/vuelycee.jpg" alt="vue lycee" class="img-school3-2">
            </div>
            <div class="school-div3">
                <h3 class="school-title-3">Lycee Jehan Ango</h3>
                <p class="school-text-3">I passed my Scientific Baccalaureate at the Jehan Ango high school where I studied from second to final year, learning in particular mathematics, physics and Spanish.</p>
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
        <div class="meRetrouver">Me retourver :</div>
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
        <div class="meRetrouver">Find me :</div>
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






function translateTo(){
    if (language === 0)
        language = 1
    else 
        language = 0
    handleRouting()
  
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
  } else {

    setMenu()
    document.getElementById('imgLanguage').addEventListener('click', function() {
        translateTo()
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
      case '/apropos':
        menuApropos.classList.add('anime') 
        if (language === 0)
            changeColor(aboutFR, true)
        else
            changeColor(aboutEN, true)
        break;
      case '/projets':
        menuProjets.classList.add('anime')
        if (language === 0)
            changeColor(projectsFR, false)
        else
            changeColor(projectsEN, false)
        break;
      case '/competences':
        menuCompetences.classList.add('anime')
        if (language === 0)
            changeColor(skillsFR, false)
        else
            changeColor(skillsEN, false)
        break;
      case '/etudes':
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
        }, { once: true });
        transition.style.height = "0%"
    }, { once: true });
}


function animMenu() {
    var header = document.querySelector(".header");
    
    gsap.to(header, { 
        duration: 2,
        left: "0%",
        ease: "power1.inOut",
        
    });
}