'use strict'
// arrays multidimensional (un array dentro de otro)
// hacemos un entorno de 'cine'
var categories = ['Action', 'Drama', 'Sitcom', 'Musical', 'Documental'];
var films = ['Robocop', 'La vida es bella', 'American pie', 'The rocky horror picture show', 'Super size me']

var cine = [categories, films];

// imprimo en consola dos arrays, uno dentro de otro
// el primero [0] corresponde a 'categories'
// el segundo [3] corresponde a 'films'
console.log(cine[0][3]);
console.log(cine[1][3]);
