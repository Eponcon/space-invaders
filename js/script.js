    // Ecran accueil -> Ecran jeux 

var ecranAccueil = document.querySelector(".accueil");
var ecranJeux = document.querySelector(".ecran-jeux");



// click sur le bouton jouer pour accéder à l'écran jeux
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

//for (var i = 0; i < 11; i++) {
    for( char of "abcdefghijk" ){
    ligneUne.innerHTML += "<img id='img-1"+char+"' src='images/geek.png' width='60' height='60'>" + "" + "</img>";
}                        

    //ligne 2 de roux
var ligneDeux = document.querySelector(".ligne-2");
console.log(ligneUne);

//for (var i = 0; i < 11; i++) {
for(char of "abcdefghijk"){
    ligneDeux.innerHTML += "<img id='img-2"+char+"' src='images/roux-2.png' width='60' height='60'>" + "" + "</img>";
}

    //ligne 3 blonde
var ligneTrois = document.querySelector(".ligne-3");
console.log(ligneUne);


//for (var i = 0; i < 11; i++) {
    for(char of "abcdefghijk"){
    ligneTrois.innerHTML += "<img id='img-3"+char+"' src='images/blonde.png' width='60' height='60'>" + "" + "</img>";
}

    //ligne 4 black
var ligneQuatre = document.querySelector(".ligne-4");
console.log(ligneUne);


//for (var i = 0; i < 11; i++) {
     for(char of "abcdefghijk"){
    ligneQuatre.innerHTML += "<img id='img-4"+char+"' src='images/black.png' width='60' height='60'>" + "" + "</img>";
}

    //ligne 5 chinois
var ligneCinque = document.querySelector(".ligne-5");
console.log(ligneUne);


//for (var i = 0; i < 11; i++) {
    for(char of "abcdefghijk"){
    ligneCinque.innerHTML += "<img id='img-5"+char+"' src='images/chinois.png' width='60' height='60'>" + "" + "</img>";
}

    // on fait apparaitre la seringue tueuse

var seringueTueuse = document.querySelector(".seringue-tueuse");
seringueTueuse.innerHTML += "<img src='images/seringue.png' width='50' >" + "" + "</img>";

    // touche gauche et droite pour déplacer la seringue

seringueTueuse.style.left = 0;

document.body.onkeydown = function() {

    var largeur = document.querySelector('.container');   
    var e = event.keyCode;
    var pilluleTireuse = document.querySelector(".pillule");

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
    
}





// tir 


//pilluleTireuse.style.top = 0;
//    if (e == 32) {          
//        pilluleTireuse.innerHTML += "<img src ='images/pillule.png' width='25' height='50'>" + "" + "</img>";
//        for (i=0; i<50; i++) {
//            pilluleTireuse.style.top = (parseInt(pilluleTireuse.style.top)) - 10 + "px";
//        }       
//        console.log(pilluleTireuse.getBoundingClientRect());
//        console.log(seringueTueuse.getBoundingClientRect());
//     }

// modifier la position de la div qui contient la tête des gugus


var divTete = document.querySelector(".blc-lignes");

divTete.style.left = 0;
divTete.style.top = 0;

function droite () {  
    divTete.style.left = (parseInt(divTete.style.left)) + 20 + "%";
}
setTimeout(droite, 2000);

function bas () {  
    divTete.style.top = (parseInt(divTete.style.top)) + 5 + "%";
}
setTimeout(bas, 3000);

function gauche () {  
    divTete.style.left = (parseInt(divTete.style.left)) - 20 + "%";
}
setTimeout(gauche, 4000);

function bas () {  
    divTete.style.top = (parseInt(divTete.style.top)) + 5 + "%";
}
setTimeout(bas, 5000);

function droite () {  
    divTete.style.left = (parseInt(divTete.style.left)) + 20 + "%";
}
setTimeout(droite, 6000);

function bas () {  
    divTete.style.top = (parseInt(divTete.style.top)) + 5 + "%";
}
setTimeout(bas, 7000);

function gauche () {  
    divTete.style.left = (parseInt(divTete.style.left)) - 20 + "%";
}
setTimeout(gauche, 8000);

function bas () {  
    divTete.style.top = (parseInt(divTete.style.top)) + 5 + "%";
}
setTimeout(bas, 9000);

function droite () {  
    divTete.style.left = (parseInt(divTete.style.left)) + 20 + "%";
}
setTimeout(droite, 10000);

function bas () {  
    divTete.style.top = (parseInt(divTete.style.top)) + 5 + "%";
}
setTimeout(bas, 11000);

function gauche () {  
    divTete.style.left = (parseInt(divTete.style.left)) - 20 + "%";
}
setTimeout(gauche, 12000);

function bas () {  
    divTete.style.top = (parseInt(divTete.style.top)) + 5 + "%";
}
setTimeout(bas, 13000);

function droite () {  
    divTete.style.left = (parseInt(divTete.style.left)) + 20 + "%";
}
setTimeout(droite, 14000);

function bas () {  
    divTete.style.top = (parseInt(divTete.style.top)) + 5 + "%";
}
setTimeout(bas, 15000);

function gauche () {  
    divTete.style.left = (parseInt(divTete.style.left)) - 20 + "%";
}
setTimeout(gauche, 16000);

function bas () {  
    divTete.style.top = (parseInt(divTete.style.top)) + 5 + "%";
}
setTimeout(bas, 17000);

function droite () {  
    divTete.style.left = (parseInt(divTete.style.left)) + 20 + "%";
}
setTimeout(droite, 18000);

function bas () {  
    divTete.style.top = (parseInt(divTete.style.top)) + 5 + "%";
}
setTimeout(bas, 19000);

function push (){
    
}
// barre d'espace lance/tire des pillules

// quand la pillule touche une tete elle disparait/explose





//console.log("position de la seringue tueuse:" + seringueTueuse.getBoundingClientRect());




