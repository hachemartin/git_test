'use strict'
/*
Utiizando un bucle, muestra la suma y la media de los números introducidos
hasta introducir un número negativo y posteriormente mostrar el resultado.

Esquema:
variable suma
variable contador
do while en el que le pedimos
	que haga (do)
		nueva varible = a petición prompt
		prompt (introducir número, número de fondo 0)
			queremos número entero (parseInt(y el prompt() aquí dentro))

		si (if) isNaN(isNotaNunmber)

*/
//declaramos variable suma y contador, a cero
var suma = 0;
var contador = 0;

//función do, petición de número y que sea entero
do{
	var numero = parseInt(prompt("Introduce un número",0));
	
	// si número no es un number, le damos valor 0
	if(isNaN(numero)){
		numero = 0;
	// si el número es igual o mayor que cero, sumará en la variable suma
	}else if(numero >= 0){
		suma = suma + numero;
		// también se puede usar operador 'asignación de adición' +=
		// suma += numero;

		// incrementamos el contador pero devolviendo el valor antes de añadirle 1
		contador++;
	}
	// mostramos el valor de suma hasta aquí y la iteración por la que va
	console.log("Llevamos "+suma);
	console.log("Estamos en la iteración "+contador);

// y todo esto se repetirá mientras el número sea mayor que 0
// cuando esta condición no se cumpla, hará un break
}while(numero >= 0)

// mostramos el final, suma de todos los números y la media
console.log("La suma de todos los números es: "+suma);
console.log("La media de todos los números es: "+(suma/contador));