'use strict'
/*
Hacer un programa que muestre todos los números entre dos números introducidos por el usuario.

Esquema:
variable numero1, numero2 (prompt para introducir número y que sean enteros parseInt)


*/
// declaramos variables que pidan números, que sean enteros
var numero1 = parseInt(prompt("Introduce el primer número",0));
var numero2 = parseInt(prompt("Introduce el segundo número",0));

// y pedimos que lo muestre en pantalla, y concatenamos un <br>
document.write("<h1> de "+numero1+" a "+numero2+" están estos números:</h1>");

// bucle for, variable que inicializa el 'for' en el número 1
// sintaxis for(variable i = numero1; condición i <= numero2; incremento i++)
for(var i = numero1; i <= numero2; i++){
	document.write(i+"<br/>");
}