"use strict"

function testVar(){
  var a = 30;
  if (true){
    var a = 50;
    console.log(a);
  }
  console.log(a);
}

//testVar(); // 50 y 50 

function testLet(){
  let a = 30;
  if(true){
    let a = 50;
    console.log(a);
  }
  console.log(a);
}

testLet(); // 50 y 30

for (var i = 0; i < 10; i++){
  console.log(i);
}

console.log(i); // with var, i is global. with ley, i will not be global