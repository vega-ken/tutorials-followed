"use strict"

function greet(greeting = 'Hello World'){
  console.log(greeting);
}

greet();

// spread operator
  // representado por 3 puntos

let args1 = [1,2,3];
let args2 = [4,5,6];

function test(){
  console.log(args1+','+args2);
}

//test.apply(null,args); // así era en ES5
test(); // ??? no queda claro este concepto.
test(...args1,...args2);
