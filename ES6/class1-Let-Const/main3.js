"use strict"

// toma en cuenta que con let aún puedes usar las variables declaradas como globales
  // solo que si las declaras dentro de la función se tomará ese valor como referencia.

let i = 1;

function test(){
  console.log(i);
}

test();