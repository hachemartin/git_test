'use strict'
/*
Hacer un programa que muestre todos los números impares entre dos números introducidos por el usuario.

Esquema:
variable numero1, numero2 (prompt para introducir número y que sean enteros parseInt)


*/
// declaramos variables que pidan números, que sean enteros
var numero1 = parseInt(prompt("Introduce el primer número",0));
var numero2 = parseInt(prompt("Introduce el segundo número",0));

// y pedimos que lo muestre en pantalla, y concatenamos un <br>
document.write("<h1> de "+numero1+" a "+numero2+" están estos números:</h1>");

// while, mientras numero1 sea menor que numero2
// hacemos incremento (numero1++), if si dividido entre 2 es != 0
while(numero1 < numero2){
	numero1++;
	// y si el resultado de dividirlo entre 2 es diferente a 0
	if(numero1%2 != 0){
		// lo mostramos en documento
		document.write("El número "+numero1+" es impar <br/>");
	}
}