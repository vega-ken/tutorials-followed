"use strict"

//without arrow functions

function Prefixer(prefix){
  this.prefix = prefix;
}

Prefixer.prototype.prefixArray = function (arr){
  let that = this;
  return arr.map(function(x){
    console.log(that.prefix + x);
  })
}

let pre = new Prefixer('Hello ');
pre.prefixArray(['Brad','Jeff']);