'use strict'
/*
Funciones
es una agrupación reutilizable de un conjunto de instrucciones
*/

// identificamos dos parámetros, numero1 y numero2
function calculadora(numero1, numero2, mostrar = false){
	// dentro de la función, empezamos con las instrucciones

	// 'if' si el parámetro 'mostrar' es 'false' me ejecutará estas instrucciones
	if(mostrar == false){
		console.log("Suma: "+(numero1+numero2));
		console.log("Resta: "+(numero1-numero2));
		console.log("Multiplicación: "+(numero1*numero2));
		console.log("División: "+(numero1/numero2));
		console.log("***********************")

	// si no es 'false', pasará a ejecutarse estas instrucciones
	}else{
		document.write("Suma: "+(numero1+numero2)+"<br/>");
		document.write("Resta: "+(numero1-numero2)+"<br/>");
		document.write("Multiplicación: "+(numero1*numero2)+"<br/>");
		document.write("División: "+(numero1/numero2)+"<br/>");
		document.write("***********************"+"<br/>")
	}

}
// ejecutamos la función con dos parámetros 'numero1' y número2'. el parámetro 'mostrar' no lo tocamos
calculadora(1, 4);
// sin embargo aquí modificamos todos los parámetros. 'Mostrar' condiciona la función y se mostrará en document.write
calculadora(2, 5, true);