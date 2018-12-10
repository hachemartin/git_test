'use strict'
// arrays multidimensional (un array dentro de otro)
// hacemos un entorno de 'cine'
var categories = ['Action', 'Drama', 'Sitcom', 'Musical', 'Documental'];
var films = ['Robocop', 'La vida es bella', 'American pie', 'The rocky horror picture show', 'Super size me']

var cine = [categories, films];

/*
// imprimo en consola dos arrays, uno dentro de otro
// el primero [0] corresponde a 'categories'
// el segundo [3] corresponde a 'films'
console.log(cine[0][3]);
console.log(cine[1][3]);
*/

// para eliminar un elemento concreto de un array
// partiendo de que conocemos el elemento que es, caso de película
// indexOf hacemos una búsqueda dentro del array
var indice = films.indexOf('La vida es bella');

// si el índice es mayor que -1 (porque -1 significaría que no lo ha encontrado)
if(indice > -1){
    // método 'splice' permite borrar tantos pasos queramos en adelante
    films.splice(indice, 1);
}

var films_string = films.join();

// también podría 'eliminar' una propiedad de mi array
// films[0] = undefined

// imprimimos en consola 'films' con las añadidas manualmente
console.log(films_string);