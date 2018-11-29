'use strict'
/*
Funciones
es una agrupación reutilizable de un conjunto de instrucciones
*/

// identificamos dos parámetros, numero1 y numero2
function calculadora(numero1, numero2){
	// dentro de la función, empezamos con las instrucciones
	console.log("Suma: "+(numero1+numero2));
	console.log("Resta: "+(numero1-numero2));
	console.log("Multiplicación: "+(numero1*numero2));
	console.log("División: "+(numero1/numero2));
	console.log("***********************")


	// podemos usar return, mensaje para devoler
	// return "Esto lo devuelve en 'return'";
}

// al ejecutar la función, nos devolverá todas las instrucciones con los parámetros
calculadora(4,9);
calculadora(1,1);