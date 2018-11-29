'use strict'
/*
Hacer un programa que pida dos números.
En el caso de no ser números, que vuelva a pedirlos.

Esquema:
prompt que nos pida número
bucle for que itere hasta un número máximo e incremente
document.write mostrando resultado
*/

var numero1 = parseInt(prompt("Introduce el primer número", 0));
var numero2 = parseInt(prompt("Introduce el segundo número", 0));

while(numero1 < 0 || numero2 < 0 || isNaN(numero1) || isNaN(numero2)){
	numero1 = parseInt(prompt("El primer número ha de ser un número positivo", 0));
	numero2 = parseInt(prompt("El segundo número ha de ser un número positivo", 0));
}

var resultado = "La suma es "+(numero1+numero2)+"<br/>"+
				"La resta es "+(numero1-numero2)+"<br/>"+
				"La multiplicación es "+(numero1*numero2)+"<br/>"+
				"La división es "+(numero1/numero2)+"<br/>";


document.write(resultado);

// en 'console.log' no reconoce el código <br/> por lo que se debe usar \n
var resultado2 = "La suma es "+(numero1+numero2)+"\n"+
				"La resta es "+(numero1-numero2)+"\n"+
				"La multiplicación es "+(numero1*numero2)+"\n"+
				"La división es "+(numero1/numero2)+"\n";

console.log(resultado2);