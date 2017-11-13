// create Elements

//create a div

let newDiv = document.createElement('div');
  // es un elemento que no aparece en el documento

  //cambiando atributos
  newDiv.className = 'hello';
  newDiv.id = 'id1';
  newDiv.setAttribute('title','Title of the Div');

  // crear un texto para el elemento
  let newDivText = document.createTextNode('Hello world');

  //agregar texto al div
  newDiv.appendChild(newDivText);

  let container = document.querySelector('header .container'); // container inside the header
  let h1 = document.querySelector('header h1'); // h1 inside the header

  console.log(newDiv);

  container.insertBefore(newDiv,h1);
    //nota que dice container!
    // inserta el newDiv antes del h1 que es la referencia

  //container.appendChild(newDiv);
