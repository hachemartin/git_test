'use strict'
/*
Funciones
es una agrupación reutilizable de un conjunto de instrucciones
*/

function calculadora(){
	// dentro de la función, empezamos con las instrucciones
	console.log("Esto es un console.log(1)");
	console.log("Esto es un console.log(2)");

	// podemos usar return, mensaje para devoler
	return "Esto lo devuelve en 'return'";
}

// al ejecutar la función, nos devolverá todas las instrucciones
console.log(calculadora());

// también podemos declarar una variable con valor función
var resultado = calculadora();

// si usamos 'document.write' en pantalla sólo se imprime 'return', los 'console.log' en consola.
document.write(resultado);