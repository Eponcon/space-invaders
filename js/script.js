// Ecran accueil -> Ecran jeux 

var ecranAccueil = document.querySelector(".accueil");
var ecranJeux = document.querySelector(".ecran-jeux");
var ecranPerdu = document.querySelector(".perdu");


// click sur le bouton jouer pour accéder à l'écran jeux
var btnJouer = document.querySelector(".btn-jouer");

btnJouer.addEventListener("click", lancerJeux);

function lancerJeux() {
    ecranAccueil.classList.add("cache");
    ecranJeux.classList.remove("cache");
}



    // génère les lignes de gugus méchants ligne par ligne

    //ligne 1 de geek
var ligneUne = document.querySelector(".ligne-1");
console.log(ligneUne);

for (var i = 0; i < 11; i++) {
    ligneUne.innerHTML += "<img src='images/geek.png' width='60' height='60'>" + "" + "</img>";
}

    //ligne 2 de roux
var ligneDeux = document.querySelector(".ligne-2");
console.log(ligneUne);

for (var i = 0; i < 11; i++) {
    ligneDeux.innerHTML += "<img src='images/roux-2.png' width='60' height='60'>" + "" + "</img>";
}

    //ligne 3 blonde
var ligneTrois = document.querySelector(".ligne-3");
console.log(ligneUne);


for (var i = 0; i < 11; i++) {
    ligneTrois.innerHTML += "<img src='images/blonde.png' width='60' height='60'>" + "" + "</img>";
}

    //ligne 4 black
var ligneQuatre = document.querySelector(".ligne-4");
console.log(ligneUne);


for (var i = 0; i < 11; i++) {
    ligneQuatre.innerHTML += "<img src='images/black.png' width='60' height='60'>" + "" + "</img>";
}

    //ligne 5 chinois
var ligneCinque = document.querySelector(".ligne-5");
console.log(ligneUne);


for (var i = 0; i < 11; i++) {
    ligneCinque.innerHTML += "<img src='images/chinois.png' width='60' height='60'>" + "" + "</img>";
}

    // on fait apparaitre la seringue tueuse

var seringueTueuse = document.querySelector(".seringue-tueuse");
seringueTueuse.innerHTML += "<img src='images/seringue.png' width='50' >" + "" + "</img>";

    // touche gauche et droite pour déplacer la seringue

seringueTueuse.style.left = 0;

document.body.onkeydown = function() {

    var largeur = document.querySelector('.container');   
    var e = event.keyCode;

    if (seringueTueuse.getBoundingClientRect().left > largeur.getBoundingClientRect().left && seringueTueuse.getBoundingClientRect().right < largeur.getBoundingClientRect().right){
        if (e == 37) { //left function
            seringueTueuse.style.left = (parseInt(seringueTueuse.style.left)) - 10 + "px";
        } else if (e == 39) { //right function         
            seringueTueuse.style.left = (parseInt(seringueTueuse.style.left)) + 10 + "px";
        }

    } else if (seringueTueuse.getBoundingClientRect().left == largeur.getBoundingClientRect().left){
        seringueTueuse.style.left = (parseInt(seringueTueuse.style.left)) + 10 + "px";

    } else if (seringueTueuse.getBoundingClientRect().right == largeur.getBoundingClientRect().right){
        seringueTueuse.style.left = (parseInt(seringueTueuse.style.left)) - 10 + "px";
    }

    console.log(seringueTueuse.getBoundingClientRect());
    console.log(largeur.getBoundingClientRect());
}



// modifier la position de la div qui contient la tête des gugus


var divTete = document.querySelector(".blc-lignes");

divTete.style.left = 0;
divTete.style.top = 0;

function droite1 () {  
    divTete.style.left = (parseInt(divTete.style.left)) + 20 + "%";
}
setTimeout(droite1, 2000);

function bas1 () {  
    divTete.style.top = (parseInt(divTete.style.top)) + 5 + "%";
}
setTimeout(bas1, 3000);

function gauche1 () {  
    divTete.style.left = (parseInt(divTete.style.left)) - 20 + "%";
}
setTimeout(gauche1, 4000);

function bas2 () {  
    divTete.style.top = (parseInt(divTete.style.top)) + 5 + "%";
}
setTimeout(bas2, 5000);

function droite2 () {  
    divTete.style.left = (parseInt(divTete.style.left)) + 20 + "%";
}
setTimeout(droite2, 6000);

function bas3 () {  
    divTete.style.top = (parseInt(divTete.style.top)) + 5 + "%";
}
setTimeout(bas3, 7000);

function gauche2 () {  
    divTete.style.left = (parseInt(divTete.style.left)) - 20 + "%";
}
setTimeout(gauche2, 8000);

function bas4 () {  
    divTete.style.top = (parseInt(divTete.style.top)) + 5 + "%";
}
setTimeout(bas4, 9000);

function droite3 () {  
    divTete.style.left = (parseInt(divTete.style.left)) + 20 + "%";
}
setTimeout(droite3, 10000);

function bas5 () {  
    divTete.style.top = (parseInt(divTete.style.top)) + 5 + "%";
}
setTimeout(bas5, 11000);

function gauche3 () {  
    divTete.style.left = (parseInt(divTete.style.left)) - 20 + "%";
}
setTimeout(gauche3, 12000);

function bas6 () {  
    divTete.style.top = (parseInt(divTete.style.top)) + 5 + "%";
}
setTimeout(bas6, 13000);

function droite4 () {  
    divTete.style.left = (parseInt(divTete.style.left)) + 20 + "%";
}
setTimeout(droite4, 14000);

function bas7 () {  
    divTete.style.top = (parseInt(divTete.style.top)) + 5 + "%";
}
setTimeout(bas7, 15000);

function gauche4 () {  
    divTete.style.left = (parseInt(divTete.style.left)) - 20 + "%";
}
setTimeout(gauche4, 16000);

function bas8 () {  
    divTete.style.top = (parseInt(divTete.style.top)) + 5 + "%";
}
setTimeout(bas8, 17000);

function droite5 () {  
    divTete.style.left = (parseInt(divTete.style.left)) + 20 + "%";
}
setTimeout(droite5, 18000);

function bas9 () {  
    divTete.style.top = (parseInt(divTete.style.top)) + 5 + "%";
    ecranJeux.classList.add("cache");
    ecranPerdu.classList.remove("cache");
    
}
setTimeout(bas9, 19000);

// boutton rejouer
var reJouer = document.querySelector(".btn-rejouer");

reJouer.addEventListener("click", lancerRejouer);

function lancerRejouer() {
    ecranPerdu.classList.add("cache");
    ecranJeux.classList.remove("cache");
}

// barre d'espace lance/tire des pillules

// quand la pillule touche une tete elle disparait/explose








