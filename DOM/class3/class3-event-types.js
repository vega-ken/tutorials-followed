let button = document.getElementById('button');

button.addEventListener('click', runEvent);
button.addEventListener('dblclick',runEvent);
button.addEventListener('mousedown',runEvent);
button.addEventListener('mouseup',runEvent);

function runEvent(e){
  console.log(`Event type: ${e.type}`);

  output.innerHTML = `<h3>MouseX : ${e.offsetX}, MouseY : ${e.offsetY}</h3>
                      <p>rgb color : (${e.offsetX},${e.offsetY},${(e.offsetX+e.offsetY)/2}) </p>`;

  box.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},${(e.offsetX+e.offsetY)/2})`;

}

/*
  Q : si no hay parametros en la funcion, luego cuando es llamada puedes usar e como evento
  pero si hay parametros que llegan a la función, cómo llamar luego al parámetro e de evento 
*/

let box = document.getElementById('box');

/* // estos 4 eventos trabajan de manera distinta
box.addEventListener('mouseenter',runEvent);
box.addEventListener('mouseleave',runEvent);

box.addEventListener('mouseover',runEvent);
box.addEventListener('mouseout',runEvent);
*/

let output = document.getElementById('output');

box.addEventListener('mousemove',runEvent);
