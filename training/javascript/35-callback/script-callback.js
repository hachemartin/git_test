'use strict'

// función de callback

function adding(number1, number2, addAndShow, addXtwo, divideXtwo, multipleX2){
    var sum = number1 + number2;

    addAndShow(sum);
    addXtwo(sum);
    divideXtwo(sum);
    multipleX2(sum);

    return sum;
}

adding(50, 50, function(value){
    console.log("La suma es: ", value);
},
function(value){
    console.log("La suma por dos es: ", (value*2));
},
function(value){
    console.log("La división entre 2 es: ", (value/2));
},
function(value){
    console.log("Dividido entre 5 es: ", (value/5));
}
);