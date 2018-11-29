'use strict'
/*
Funciones
es una agrupación reutilizable de un conjunto de instrucciones
*/

// creamos función, pero la preparamos para que pueda contener parámetros interminables
function listFruits(fruit1, fruit2, ...more_fruits){
	console.log("Fist fruit: ", fruit1);
	console.log("Second fruit: ", fruit2);
	console.log(more_fruits);
}

// ejecutamos la función con los parámetros fruta
listFruits("Apple", "Orange", "Banana", "Watermelon");

// creamos un array con los parámetros. Es igual que el anterior pero mejor ordenado
var fruits = ["applE", "orangE"];
// utilizamos ...fruits para que haga un spread. Sin '...' la 'fruit1' me dará '["applE", "orangE"]
listFruits(...fruits, "bananA", "watermeloN", "cocO")