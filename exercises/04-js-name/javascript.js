'use strict'
/*
FASE 1
- Crea un array con tu nombre en el que cada posición corresponda a una letra.
- Haz un bucle (for) que recorra y muestre por consola (console.log) cada letra.
*/

// creamos array con nombre y apellidos
// todas las arrays mayúsculas o minúsculas para evitar errores
var myName;
myName = ["D", "A", "V", 1, "D"];

var mySurname;
mySurname = ["H","E","R","N","A","N","D","E","Z"];

var vowel;
vowel = ["A", "E", "I", "O", "U"];

var myMap = new Map();

/*
FASE 2
-Crea una función que reconozca si la letra es vocal o consonante.
-Mejora la condición por si pudiera haber un número.
*/
// CORRECCIÓN: el ejercicio 2 (de las vocales)  deberías hacer una función que sea la que compruebe el tipo de caracter.

// creamos función con variable 'x' para poder aplicar función a otras arrays
function scanVowel(x){
// sintaxis for (variable = posiciónInicio; condición; incremento)
for (var i = 0; i < x.length; i++) {
// si es 'vocal' (si devuelve valor -1) imprime en consola 'vowel'
    if (vowel.indexOf(x[i]) != -1) {
        console.log(x[i]+" is vowel");
// si el tipo de dato es igual a numero, imprime 'number'
    } else if (typeof x[i] === 'number') {
        console.log(x[i]+" is number");
// si ninguna se cumple, imprime 'consonante'
    } else {
        console.log(x[i]+" is consonant");
    }
}
}
/*
FASE 3
-Almacena tanto letras del array como número de veces que aparece
*/
// CORRECCIÓN: 3 (maps) lo mismo, deberías extraerlo en una función lo que es la comprobación.

// creamos una función con variable 'y' para poder aplicar función a otras arrays
// map crea un mapa de la array guardando el valor en cada iteración
function scanMap(y){
// bucle for para rastrear la array
    for (var c = 0; c < y.length; c++) {
// .has(y[c]) para ver los elementos de la array 
if (myMap.has(y[c]) == true) {
    var value = myMap.get(y[c]);
    myMap.set(y[c], value + 1);
    console.log(myMap);
} else {
    myMap.set(y[c], 1);
}
}
}

// ejecutamos la función 'scanVowel'
scanVowel(myName);
// ejecutamos la función 'scanMap'
scanMap(myName);

/*
FASE 4
- Una sola array que recoja 'myName' y 'mySurname. Cada letra con una posición y espacio entre ambas
*/

// declaramos myFullName
var myFullName = [];
// .push de 'myName' y 'mySurname'
// '...' spread para respetar una sola array
myFullName.push (...myName, ..." ", ...mySurname);
// imprimimos la variable myFullName
console.log(myFullName);