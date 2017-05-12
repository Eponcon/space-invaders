// click sur le bouton jouer pour accéder à l'écran jeux

var ecranAccueil = document.querySelector(".accueil");
var ecranJeux = document.querySelector(".ecran-jeux");
var ecranPerdu = document.querySelector(".perdu");
var divJeux = document.querySelector(".jeux");

var btnJouer = document.querySelector(".btn-jouer");

btnJouer.addEventListener("click", lancerJeux);

function lancerJeux() {
    ecranAccueil.classList.add("cache");
    ecranJeux.classList.remove("cache");
}

// génère les lignes de gugus méchants ligne par ligne

	//ligne 1 de geek
var ligne1 = document.querySelector(".ligne-1");


for( char of "abcdefghijk" ){
    ligne1.innerHTML += "<img class='img-gugus' src='images/geek.png' width='60' height='60'>";
}                        
    //ligne 2 de roux
var ligne2 = document.querySelector(".ligne-2");


for(char of "abcdefghijk"){
    ligne2.innerHTML += "<img class='img-gugus' src='images/roux-2.png' width='60' height='60'>";
}
    //ligne 3 blonde
var ligne3 = document.querySelector(".ligne-3");


for(char of "abcdefghijk"){
    ligne3.innerHTML += "<img class='img-gugus' src='images/blonde.png' width='60' height='60'>";
}
    //ligne 4 black
var ligne4 = document.querySelector(".ligne-4");


for(char of "abcdefghijk"){
    ligne4.innerHTML += "<img class='img-gugus' src='images/black.png' width='60' height='60'>";
}
    //ligne 5 chinois
var ligne5 = document.querySelector(".ligne-5");
    
for(char of "abcdefghijk"){
    ligne5.innerHTML += "<img class='img-gugus' src='images/chinois.png' width='60' height='60'>";
}

// on fait apparaitre la seringue tueuse

var seringueTueuse = document.querySelector(".seringue-tueuse");
seringueTueuse.innerHTML += "<img src='images/seringue.png' width='50' >";

// touche gauche et droite pour déplacer la seringue

seringueTueuse.style.left = 600 + "px";

document.addEventListener("keydown", bouge);
document.addEventListener("keyup", tir); 

function bouge() {

	var e = event.keyCode;
    var largeur = document.querySelector('.container');
     
        if (e == 37) { //left function
            seringueTueuse.style.left = (parseInt(seringueTueuse.style.left)) - 10 + "px";
	            if (seringueTueuse.getBoundingClientRect().left == largeur.getBoundingClientRect().left){
	        		seringueTueuse.style.left = (parseInt(seringueTueuse.style.left)) + 10 + "px";

	    		} else if (seringueTueuse.getBoundingClientRect().right == largeur.getBoundingClientRect().right){
	        		seringueTueuse.style.left = (parseInt(seringueTueuse.style.left)) - 10 + "px";
    			}
        } else if (e == 39) { //right function         
            seringueTueuse.style.left = (parseInt(seringueTueuse.style.left)) + 10 + "px";
	            if (seringueTueuse.getBoundingClientRect().left == largeur.getBoundingClientRect().left){
	        		seringueTueuse.style.left = (parseInt(seringueTueuse.style.left)) + 10 + "px";

	    		} else if (seringueTueuse.getBoundingClientRect().right == largeur.getBoundingClientRect().right){
	        		seringueTueuse.style.left = (parseInt(seringueTueuse.style.left)) - 10 + "px";
	    		}       
        }  
}



function tir() {
    var e = event.keyCode;
        if (e == 32){
	        var divPillule = document.querySelector(".divPillule");
	        divPillule.innerHTML += '<img class="pilluleLance" src="images/pillule.png" width="25" height="50">';
	        	
		    var mesPillule = document.querySelectorAll(".pilluleLance");

		    mesPillule[mesPillule.length-1].style.left = seringueTueuse.offsetLeft + seringueTueuse.offsetWidth / 2 + "px";
		    mesPillule[mesPillule.length-1].style.top = seringueTueuse.offsetTop - seringueTueuse.offsetHeight / 2 + "px";
		}			  
} 

// tir 

function myMove() {
	var divPillule = document.querySelector(".divPillule");
	var mesPillule = document.querySelectorAll(".pilluleLance");

	for (i = 0; i < mesPillule.length; i++) {
		var pos = mesPillule[i].offsetTop;
		mesPillule[i].style.top = pos -2 + "px";

	    if (mesPillule[i].offsetTop < parseInt(ecranJeux.getBoundingClientRect().top)) {
				divPillule.removeChild(mesPillule[i]);
                collision();
		} 
        
        }
 
	}


var id = setInterval(myMove, 2);

//collision gugus pillule

function collision(){
    
		var divPillule = document.querySelector(".divPillule");
        var mesPillule = document.querySelectorAll(".pilluleLance");
		var lesGugus = document.querySelectorAll(".img-gugus");
 console.log(lesGugus);
 console.log(mesPillule);
 console.log(divPillule);
    
    
		for(j=0; j<mesPillule.length; j++){
              
			for(i=0; i<lesGugus.length; i++){
                
				if(parseInt(mesPillule[j].getBoundingClientRect().left) >= parseInt(lesGugus[i].getBoundingClientRect().left)  && parseInt(mesPillule[j].getBoundingClientRect().right) <= parseInt(lesGugus[i].getBoundingClientRect().right)){
					
                    if(parseInt(mesPillule[j].getBoundingClientRect().top) >= parseInt(lesGugus[i].getBoundingClientRect().top) && parseInt(mesPillule[j].getBoundingClientRect().bottom) <= parseInt(lesGugus[i].getBoundingClientRect().bottom)){
						
                        
                        lesGugus[i].classList.add('cache');
//                        lesGugus[i].classList.remove('invader');

						mesPillule[j].classList.add('cache');
						divPillule.removeChild(mesPillule[j]);

					}
				} 
			}
		}
	}


// tir

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

//

var reJouer = document.querySelector(".btn-rejouer");

reJouer.addEventListener("click", lancerRejouer);
   
function lancerRejouer() {
  ecranPerdu.classList.add("cache");
  ecranJeux.classList.remove("cache");
}

// barre d'espace lance/tire des pillules

// quand la pillule touche une tete elle disparait/explose

// barre d'espace lance/tire des pillules

// quand la pillule touche une tete elle disparait/explose



