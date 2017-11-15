"use strict"

var myPromise = Promise.resolve('Foo');

myPromise.then((res) => console.log(res));


var myPromise = new Promise(function(resolve,reject){
  setTimeout(() => resolve(4),2000);
});

myPromise.then((res)=>{
  res +=3;
  console.log(res);
})