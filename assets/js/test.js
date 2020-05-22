/* A terme, j'vais essayer de faire que deux fonction en récupérant l'id lors du clic, mais pour l'instant je n'y arrive pas */

function changecontact() {
    var element = document.getElementById("contact");
    element.classList.toggle("sidesectionbig");
} 

function changelang() {
    var element = document.getElementById("languages");
    element.classList.toggle("sidesectionbig");
}

function changeadv() {
    var element = document.getElementById("advantages");
    element.classList.toggle("sidesectionbig");
}

function changequal() {
    var element = document.getElementById("qualities");
    element.classList.toggle("sidesectionbig");
}

function changeform() {
    var element = document.getElementById("formation");
    element.classList.toggle("mainsectionbig");
}

function changepro() {
    var element = document.getElementById("proexperience");
    element.classList.toggle("mainsectionbig");
}

function changeother() {
    var element = document.getElementById("otherexperience");
    element.classList.toggle("mainsectionbig");
}