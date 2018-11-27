'use strict'
/*
Realiza un programa que pida dos números y ue nos diga cuál es el mayor y cuál es el menor y si son iguales.

Esquema:
- dos variables (numero 1, numero 2)
- dos ventanas para introducir números, prompt
- console.log() para mostrarlos
- if numero1 > numero 2, console.log(numero1)
	else console.log(numero2)
- if == mostrar console.log(es igual)
	else

*/

var numero1 = parseInt(prompt("Introduce el primer número", 0));
var numero2 = parseInt(prompt("Introduce el segundo número", 0));

console.log(numero1, numero2);

if(numero1 > numero2){
	console.log(numero1+" es mayor que "+numero2);
}else if(numero1 == numero2){
		console.log("Son iguales");
}else{
		console.log(numero2+" es mayor que "+numero1);
}

/*

// se puede conseguir el mismo resultado de diferente forma:
-if, else if, else
-if, dentro otro if, else

if(numero1 > numero2){
	console.log(numero1+" es mayor que "+numero2);
	if(numero1 == numero2){
		console.log("Son iguales");
	}
}else{
		console.log(numero2+" es mayor que "+numero1);
	}
*/