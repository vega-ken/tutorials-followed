"use strict"

//without arrow functions
let add = function (a,b){
  let sum = a+b;
  console.log(sum);
  return false;
}

//with arrow functions
let add2 = (a,b) => {
  let sum = a+b;
  console.log(sum);
  return false;
}

add(2,2);
add2(3,3);