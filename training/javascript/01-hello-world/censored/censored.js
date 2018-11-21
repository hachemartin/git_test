// Queremos censurar el contenido H1 y P del HTML
// Primero creamos variable y seleccionamos
// Segundo damos valor
// Ejemplo: https://developer.mozilla.org/es/docs/Learn/Getting_started_with_the_web/JavaScript_basics

var miTitulo = document.querySelector('h1');
miTitulo.innerHTML = "h1 Censored!";

// Y creamos otra para P

var miParrafo = document.querySelector('p');
miParrafo.innerHTML = "p Censored!";

// Y creamos otra para LI

var miLista = document.querySelector('li','li');
miLista.innerHTML = "li Censored!";
// Observamos que sólo modifica el primer LI

var miImage = document.querySelector('img');

miImage.onclick = function () {
    var miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/firefox-icon.png') {
      miImage.setAttribute('src','images/chaplin.jpg');
    } else {
      miImage.setAttribute('src', 'images/firefox-icon.png');
    }
}