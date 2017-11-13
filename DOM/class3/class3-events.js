document.getElementById('button').addEventListener('click', buttonClick);

function buttonClick(e){
  /*console.log('123');
  document.getElementById('header-title').textContent = 'Hello world';
  document.querySelector('#main').style.backgroundColor = 'yellow';*/

  console.log(e); // __proto__ mouseEvent
    // con esto puedes ver todas las propiedades que trae el mouseEvent como la posición del mouse en ese momento

  console.log(e.target); // el elemento en html del documento en el que está ocurriendo el evento
  console.log(e.target.id); // se pueden acceder a las propiedades

  console.log(e.target.className); // texto con los nombres de las clases del elemento
  console.log(e.target.classList); // arreglo de las clases del elemento
    //retorna un __proto__ DOMTokenList

  let output = document.getElementById('output');
  output.innerHTML = `<h3>${e.target.id}</h3>`;

  console.log(e.type);
    //retorna el tipo de evento que se está ejecutando
  
  //tomando mediciones desde la ventana  
  console.log(e.clientX);
  console.log(e.clientY);
    
  // tomando mediciones desde el elemento
  console.log(e.offsetX);
  console.log(e.offsetY);

  // boolean - para saber si estás presionando cierta tecla
  console.log(e.altKey);
  console.log(e.ctrlKey);
  console.log(e.shiftKey);
    
}

