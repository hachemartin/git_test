'use strict'
/*
Hacer un programa que muestre la tabla de multiplicar del número introducido.

Esquema:
prompt que nos pida número
bucle for que itere hasta un número máximo e incremente
document.write mostrando resultado

*/
// declaramos variables que pidan números, que sean enteros
var numero = parseInt(prompt("Introduce un número",1));

// creamos un encabezado
document.write("<h1>Tabla del "+numero+"</h1><br/>");
// bucle for
for(var i = 1; i <= 10; i++){
	document.write(i+" x "+numero+" = "+(i*numero)+"<br/>");
}

// todas las tablas hasta el 7
for(var c = 1; c <= 7; c++){
	document.write("<h1>Tabla del "+c+"</h1>");
	for(var i = 1; i <= 10; i++){
		document.write(i+" x "+c+" = "+(i*c)+"<br/>");
	}
}