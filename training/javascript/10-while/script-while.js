'use strict'

// while es un bucle indefinido, se ejecuta infinitamente
var year = 2018;

// mientras pase la condición que yo escriba, se ejecuta el contenido
while(year <= 2050){

	console.log("Estamos en el año "+year);

// a la variable 'year' le añadimos una cifra más en cada bucle
	year++;
}

/* también podríamos hacer in decremento

var year = 2018;

while(year != 1992){
	console.log("Estamos en el año "+year);
	year--;
}

*/