'use strict'

// Variable 
var number = 500;
console.log(number); //value 500

// If
if(true){
	var number = 499;
	console.log(number); //value 499
}

console.log(number); // value 499


/* Console.log
500
499
500
*/

//Test LET, only change into the block

var text = "First"
console.log(text); // value First

if(true){
	let text = "Second";
	console.log(text); // value Second
}

console.log(text); // value First