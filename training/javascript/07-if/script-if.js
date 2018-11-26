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

// ahora con operadores lógicos
var year = 2018

if(year != 2019){
	console.log("No es el mismo año");
}

// and
if(year >= 2000 && year <= 2020){
	console.log("Estamos en la era actual");
}else{
	console.log("Estamos en otra era")
}

// or
if(year == 1998 || year == 2008 || year == 2018){
	console.log("El año acaba en 8");
}else{
	console.log("El año no acaba en 8");
}