'use strict'
/*
Hacer un programa que muestre la tabla de multiplicar del número introducido.

Esquema:
prompt que nos pida número

*/
// declaramos variables que pidan números, que sean enteros
var numero = parseInt(prompt("Introduce un número",1));


// bucle for
for(var i = 0; i <= 10; i++){
	document.write(i+" x "+numero+" = "+(i*numero)+"<br/>");
}