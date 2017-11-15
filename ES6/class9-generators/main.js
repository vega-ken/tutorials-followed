"use strict"

function *g1(){
  console.log('Hello');
  yield 'Yield 1 ran...';
  console.log('World');
  yield 'Yield 2 ran...';
  return 'Returned...';
}

// necesitas setear el generador a una variable

var g = g1();

/*
console.log(g.next());
console.log(g.next());
console.log(g.next());
*/

for(let val of g){
  console.log(val);
}