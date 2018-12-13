'use strict'

// DOM - Document Objetc Model

/*
En este script declararemos una variable que recoja un id del HTML
posteriormente haremos dos funciones diferentes, con modificaciones de color
aplicaremos la primera función sobre la variable que hemos declarado
luego cambiaremos la variable al siguiente id del HTML
y aplicaremos la segunda función
/*
function changeColor(color){
    testing_1.style.background = color;
    testing_2.style.background = color;
}
*/

// declaro una variable cuyo valor es recoger un valor del HTML
// var testing = document.getElementById("testing_1");
var testing = document.querySelector("#testing_1");
// creo una función que recoge un cambio de color
function changeColor1(prueba){
    prueba.innerHTML = "Texto modificado DOM";
    prueba.style.background = "red";
    prueba.style.padding = "20px";
    prueba.style.color = "white";
}

function changeColor2(prueba){
    prueba.innerHTML = "También estoy modificado DOM";
    prueba.style.background = "#998822";
    prueba.style.padding = "10px";
    prueba.style.color = "#017523";
}
// ejecuto la función
changeColor1(testing);

var testing = document.getElementById("testing_2");
changeColor2(testing);
/*
var testing = document.getElementById("testing_2");
// modifico el id 'testing_2'
testing.innerHTML = "También estoy modificado DOM";
testing.style.background = "#998822";
testing.style.padding = "10px";
testing.style.color = "#017523";
*/

// imprimo la variable 'testing'
console.log(testing_1); // el primer id modificado
console.log(testing_2); // el segundo id modificado
console.log(testing); // el segundo, porque a mitad cambiamos valor de la variable

// observaciones: desde el script reconoce el ID del HTML sin necesidad de declararlo anteriormente
