'use strict'

// condicional if
// declaro variables
var edad1 = 30;
var edad2 = 18;

// la condición
if(edad1 > edad2){
	// ejecuta esto
	console.log(edad1+" es mayor que "+edad2);
	if(edad1 == 30){
		console.log("¡Tienes "+edad1+" años!");
	}else{
		console.log("No tienes "+edad1+" años")
	}
}else{
	console.log(edad1+" es menor que "+edad2);
}