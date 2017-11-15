"use strict"

//with arrow functions

function Prefixer(prefix){
  this.prefix = prefix;
}

Prefixer.prototype.prefixArray = function (arr){
  return arr.map((x) => {
    console.log(this.prefix + x);
  })
}

let pre = new Prefixer('Hello ');
pre.prefixArray(['Brad','Jeff']);