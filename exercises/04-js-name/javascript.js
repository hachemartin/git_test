//variables

var myName;
myName = ["D", "A", "V", 1, "D"];

var mySurname;
mySurname = ["H","E","R","N","A","N","D","E","Z"];

var vowel;
vowel = ["A", "E", "I", "O", "U"];

var myMap = new Map();


// CORRECCIÓN: el ejercicio 2 (de las vocales)  deberías hacer una función que sea la que compruebe el tipo de caracter.
//for
function nameSurname(){
for (var i = 0; i < myName.length; i++) {

    if (vowel.indexOf(myName[i]) != -1) {
        console.log(myName[i]+" is vowel");
    } else if (typeof myName[i] === 'number') {
        console.log(myName[i]+" is number");
    } else {
        console.log(myName[i]+" is consonant");
    }
}

// CORRECCIÓN: 3 (maps) lo mismo, deberías extraerlo en una función lo que es la comprobación.
//map
function mapNameSurname(){

    if (myMap.has(myName[i]) == true) {
        var valor = myMap.get(myName[i]);
        myMap.set(myName[i], valor + 1);
    } else {
        myMap.set(myName[i], 1);
    }
} 

}

nameSurname();
//console.log(myName);
//console.log(myMap);


//myFullName
var myFullName = [];
myFullName.push (...myName, ..." ", ...mySurname);
console.log(myFullName);