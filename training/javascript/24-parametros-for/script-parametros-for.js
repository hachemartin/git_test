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

// bucle for, la variable 'i' hasta 10. Numero2 sería 8
for(var i = 1; i <= 10; i++){
	calculadora(i, 8);
}