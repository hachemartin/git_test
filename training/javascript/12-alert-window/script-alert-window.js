'use strict'
/*
// alerta
alert("Esto es una alerta");

// confirmación
confirm("¿Estás seguro?")
*/

var mi_resultado = confirm("¿Estás seguro?");
console.log(mi_resultado);
// expected output: true or false

// consultamos en la consola el tipo de dato que es
console.log(typeof(mi_resultado));
// expected output: boolean

// ventan de ingreso de datos con 'prompt'
// sintaxis prompt("pregunta", valorPorDefecto)
/*
prompt("¿Qué edad tienes?", 18);

// pero lo vamos a meter dentro de una variable para consultar después el resultado
*/

var mi_resultado2 = prompt("¿Qué edad tienes?", 18);
	console.log(mi_resultado2);

// hacemos consulta del tipo de dato
	console.log(typeof mi_resultado2);
// expected output: string