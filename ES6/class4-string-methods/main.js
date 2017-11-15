"use strict"

let theString = "Hello, I am Ken seeing a youtube tutorial on ES6.";

// metodos string para buscar textos en javascript
console.log(theString.startsWith('Hello')); // 'hello' != 'Hello'

console.log(theString.endsWith('ES6.'));

console.log(theString.includes('youtube'));  

// hex
console.log(0xFF);
//binaries with es6
console.log(0b10010101);
//octo with es6
console.log(0o543);

//number methods
console.log('number methods');
console.log(Number.isFinite(3));
console.log(Number.isFinite(Infinity));
console.log(Number.isNaN('a string')); // is a number?
  //otros
    //Number.isInteger()



