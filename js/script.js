// Ecran accueil -> Ecran jeux 

var ecranAccueil = document.querySelector(".accueil");
var ecranJeux = document.querySelector(".ecran-jeux");


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
 
seringueTueuse.innerHTML += "<img src='images/seringue.png'>" + "" + "</img>";


// touche gauche et droite pour déplacer la seringue

document.querySelector(".seringue-tueuse").style.left = 0;


document.body.onkeydown = function() {
var largeur=document.querySelector('.container').availWidth;
    
    var e = event.keyCode;
//    if ( > 360){
        if (e == 37) { //left function
            document.querySelector(".seringue-tueuse").style.left = (parseInt(document.querySelector(".seringue-tueuse").style.left)) - 10 + "px";
        } else if (e == 39) { //right function
            document.querySelector(".seringue-tueuse").style.left = (parseInt(document.querySelector(".seringue-tueuse").style.left)) + 10 + "px";
        }

    
    
    
    console.log(seringueTueuse.getBoundingClientRect());
}
// on fait apparaitre la pillule

var pilluleTireuse = document.querySelector(".pillule");

pilluleTireuse.innerHTML += "<img src ='images/pillule.png'>" + "" + "</img>";
//  restreindre au container la seringue

// barre d'espace lance/tire des pillules

// quand la pillule touche une tete elle disparait/explose

// modifier la position des tetes

console.log("position de la seringue tueuse:" + seringueTueuse.getBoundingClientRect());




