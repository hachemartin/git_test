'use strict'
/*
Hacer un programa que muestre si el número introducido es par o impar. 

Esquema:
prompt que nos pida número
que verifique si es válido, y nos pida de nuevo número
después que nos muestre si es par o impar

*/
// declaramos variables que pidan números, que sean enteros
var numero = parseInt(prompt("Introduce un número",0));


// mientras while, lo introducido no sea un número
while(isNaN(numero)){
	numero = parseInt(prompt("Introduce un número",0));
}

if(numero%2 == 0){
	document.write("<h1>El número "+numero+" es par</h1>");
}else{
	document.write("<h1>El número "+numero+" es impar</h1>");
}