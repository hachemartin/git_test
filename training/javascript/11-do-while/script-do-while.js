'use strict'

// do while
// me ejecutará el código mientras la condición se cumpla
var year = 2010

// do while nos permite ejecutar un bloque de código
do{
	console.log("Estamos en el pasado");

/* 'break' para en el momento que llega a 2015
	if(year == 2015){
		break;
	}
*/
	year++;

// y después evaluar la condición
}while(year < 2018){
console.log("Ya estamos en el "+year);
}