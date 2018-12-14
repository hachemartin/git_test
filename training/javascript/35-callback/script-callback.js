'use strict'

// función de callback

function adding(number1, number2, addAndShow, addXtwo){
    var sum = number1 + number2;

    addAndShow(sum);
    addXtwo(sum);

    return sum;
}

adding