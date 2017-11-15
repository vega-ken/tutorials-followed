"use strict"

let myArray = [11,22,33,45];
let mySet = new Set(myArray);

mySet.add('100'); // puedes tener varios tipos de 
mySet.add({a : 1, b : 2});
mySet.delete(22);

console.log(mySet);
console.log(`myset size : ${mySet.size}`);

mySet.forEach(function(val){
  console.log(val);
});

console.log('---MAP---');

let myMap = new Map([['a1','Hello'],['b2','Goodbye']]);
myMap.set('c3','foo'); // add to the map
myMap.delete('a1'); // erase by key
console.log(myMap);
console.log(`myMap size : ${myMap.size}`);

let carWeakSet = new WeakSet();

let car1 = {
  make : 'Honda',
  model : 'Civil'
};
let car2 = {
  make : 'Toyota',
  model : 'Camry'
};

carWeakSet.add(car1);//add the object
carWeakSet.add(car2);//add the object
carWeakSet.delete(car1);

console.log(carWeakSet);