"use strict"

// template strings te permiten
  // usar variables, funciones sin concatenar de la manera antigua
    // antes se hacía con + ' '

const name = 'John';

function makeUpperCase(word){
  return word.toUpperCase();
}

let template =
`<h1>${makeUpperCase('Hello')} ${name}</h1> 
<p>This is a template</p>`;

document.getElementById('template').innerHTML = template;