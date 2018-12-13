'use strict'

// DOM - Document Objetc Model


// creamos una función con modificación de color
function changeColor1(prueba){
    prueba.innerHTML = "Texto modificado DOM";
    prueba.style.background = "red";
    prueba.style.padding = "20px";
    prueba.style.color = "white";
}

// segunda función con modificación de color
function changeColor2(prueba){
    prueba.innerHTML = "También estoy modificado DOM";
    prueba.style.background = "#998822";
    prueba.style.padding = "10px";
    prueba.style.color = "#017523";
}

function changeColorPink(prueba){
    prueba.innerHTML = "PINK PINK PINK";
    prueba.style.background = "pink";
    prueba.style.padding = "10px";
    prueba.style.color = "white";
}

// declaramos variable que recoja, por tag, todos los 'div'
var allDivs = document.getElementsByTagName("div");

// declaramos variable que recoja el índice '2' de los 'div'
var contentText = allDivs[2];
// ordenamos que modifique su contenido imprimiéndolo en el HTML
contentText.innerHTML = "MODIFICADO";
contentText.style.background = "Blue";
contentText.style.padding = "5px";
contentText.style.color = "#991100";

// mostramos en consola todos los 'div'
console.log(allDivs);
// mostramos en consola el valor de la variable 'contentText'
console.log(contentText);
// ejecutamos variable 'changeColor1' aplicado al div 'testing_5'
changeColor1(testing_5);
// ejecutamos variable 'changeColor2' aplicado al div 'testing_1'
changeColor2(testing_1);
// ejecutamos variable 'changeColorPink' aplicado al div 'testing_2'
changeColorPink(testing_2);