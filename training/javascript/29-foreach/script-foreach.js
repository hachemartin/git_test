'use strict'

// arrays, arreglos, matrices

// declaramos las variables
var myName = "David Hernández Padro María Fernando";
var cities = ["Barcelona", "Santa Cruz de Tenerife", "Madrid", "Valencia", "Birmingham", "Nimega"];

// hacemos array con lenguajes
var languages = new Array("HTML", "CSS", "JavaScript", "Markdown");
/*
// creamos variable que solicita una respuesta
var element = parseInt(prompt("¿Qué elemento del array quieres?", 0));
// If para que nos devuelva error si no es correcto
if(element >= cities.length){
	alert("Introduce el número correcto menor que " +cities.lenght);
}else{

// alerta que nos da resultado la posición que hemos escrito
alert(cities[element]);
}
*/

// queremos imprimir una lista del contenido de 'languages'
document.write("<h1>Lenguajes de programación</h1>");
document.write("<ul>");

// forEach nos itera todo el array y nos lo muestra
languages.forEach((element, i, array)=>{
	console.log(array);
	document.write("<li>"+i+" - "+element+"</li>");
})

// cierro el elemento 'ul' de lista
document.write("</ul>");