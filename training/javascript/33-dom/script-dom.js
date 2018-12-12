'use strict'

// DOM - Document Objetc Model

// declaro una variable cuyo valor es recoger un valor del HTML
var testing = document.getElementById("testing")

// modifico el id 'testing_1'
testing_1.innerHTML = "Texto modificado DOM";
testing_1.style.background = "red";
testing_1.style.padding = "20px";
testing_1.style.color = "white";

// modifico el id 'testing_2'
testing_2.innerHTML = "También estoy modificado DOM";
testing_2.style.background = "#998822"
testing_2.style.padding = "10px";
testing_2.style.color = "#017523"

// imprimo la variable 'testing'
console.log(testing_2);
// observaciones: desde el script reconoce el ID del HTML sin necesidad de declararlo anteriormente
