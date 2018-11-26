'use strict'

// switch
// declaramos variables
// creamos variable 'imprime' para simplificar console.log()
var edad = 18;
var imprime = "";

switch(edad){
	case 18:
		imprime = "Tienes 18";
	break;
	case 25:
		imprime = "Ya tienes 25";
	break;
	case 35:
		imprime = "Tienes más de 30";
	break;
}

console.log(imprime);