// Récupération de l'élément qui va changer de couleur
const overlay = document.getElementById("product-shape");
// Ajout de la fonction changeColor à tous les éléments cliquable
var el = document.getElementsByClassName("color");
for (var i = 0; i < el.length; i++) {
el[i].onclick = changeColor;
}
// définition de la fonction changeColor
function changeColor(e) {
// get the hex colorlet 
  let hex = e.target.getAttribute("data-hex");
// set the hex color
overlay.style.fill = hex;
}

// Récupération de l'élément qui va changer de couleur
const overlay2 = document.getElementById("product-shape2");
// Ajout de la fonction changeColor à tous les éléments cliquable
var el2 = document.getElementsByClassName("color2");
for (var i = 0; i < el.length; i++) {
el2[i].onclick = changeColor2;
}
// définition de la fonction changeColor
function changeColor2(e) {
// get the hex colorlet 
  let hex2 = e.target.getAttribute("data-hex");
// set the hex color
overlay2.style.fill = hex2;
}

