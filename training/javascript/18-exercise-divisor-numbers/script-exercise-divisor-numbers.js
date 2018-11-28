'use strict'
/*
Hacer un programa que muestre todos los números pares entre dos números introducidos por el usuario.

Esquema:
variable numero1, numero2 (prompt para introducir número y que sean enteros parseInt)


*/
// declaramos variables que pidan números, que sean enteros
var numero = parseInt(prompt("Introduce el número",1));

// y pedimos que lo muestre en pantalla, y concatenamos un <br>
document.write("<h1>Los divisores de "+numero+" son:</h1>");

// bucle for, valor de la variable 1, mientras sea menor que el número, irá incrementando
for(var i = 1; i <= numero; i++){
	// y si el resultado de dividir el 'i' entre el número da 0, es divisor
	if(numero%i == 0){
		// lo mostramos en documento
		document.write("El número "+i+" es divisor <br/>");
	}
}