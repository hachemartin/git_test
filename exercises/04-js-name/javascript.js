//variables

var myName;
myName = ["D", "A", "V", 1, "D"];

var mySurname;
mySurname = ["H","E","R","N","A","N","D","E","Z"];

var vowel;
vowel = ["A", "E", "I", "O", "U"];

var myMap = new Map();

//for

for (var i = 0; i < myName.length; i++) {

    if (vowel.indexOf(myName[i]) != -1) {
        console.log(myName[i]+" is vowel");
    } else if (typeof myName[i] === 'number') {
        console.log(myName[i]+" is number");
    } else {
        console.log(myName[i]+" is consonant");
    }

//map

    if (myMap.has(myName[i]) == true) {
        var valor = myMap.get(myName[i]);
        myMap.set(myName[i], valor + 1);
    } else {
        myMap.set(myName[i], 1);
    }
} 

console.log(myName);
console.log(myMap);


//myFullName
var myFullName = [];
myFullName.push (...myName, ..." ", ...mySurname);
console.log(myFullName);