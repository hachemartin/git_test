'use strict'

// Variable 
var number = 500;
console.log(number); // expected output: 500

// If
if(true){
	var number = 499;
	console.log(number); // expected output: 499
}

console.log(number); // expected output: 499


/* Console.log
500
499 (changed)
499 (still changed)
*/

//Test LET, only change into the block

var text = "First"
console.log(text); // expected output: First

if(true){
	let text = "Second";
	console.log(text); // expected output: Second
}

console.log(text); // expected output: First

/* Console.log
First
Second (changed)
First (original value)
*/