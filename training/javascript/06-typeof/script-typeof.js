'use strict'

// operadores 
var number1 = 5;
var number2 = 10;
var number_decimal = 5.9
var operation = number1 * number2;

console.log("el resultado de la operación es: "+operation);
// expected output: 50


// type of data
var whole_number = 44;
var string_text = 'Hello, this is a "string"';
var true_or_false = false;

// false number because is string
var false_number = "55";


console.log("el resultado es: "+true_or_false);
// expected output: false

console.log(number1+number2+false_number);
// expected output: 1555


// function 'Number' for use a string number like a number
console.log(number1+number2+Number(false_number));
// expected output: 70

// function 'String' do the contrary
console.log(String(number1)+String(number2)+Number(false_number));
// expected output: 51055

// también se puede usar parteInt() parse convertir a número entero
// o parseFloat() para conservar decimales
console.log(number1+number_decimal);
// expected output: 10.9

// si no queremos decimales, queremos números enteros
console.log(parseInt(number1+number_decimal));
// expected output: 10

// si queremos conservar los decimales
console.log(parseFloat(number1+number_decimal));
// expected output: 10.9

// tipos de datos TYPEOF
console.log(typeof number1)
// expected output: number
console.log(typeof number2)
// expected output: number
console.log(typeof number_decimal)
// expected output: number
console.log(typeof operation)
// expected output: number
console.log(typeof whole_number)
// expected output: number
console.log(typeof string_text)
// expected output: string
console.log(typeof true_or_false)
// expected output: boolean