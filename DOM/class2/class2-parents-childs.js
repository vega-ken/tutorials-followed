// query parents and childrens

let itemList = document.querySelector('#items');
  // cogera el 'ul' con todos los items
  // retorna el elemento del documento

  console.log(itemList);

  console.log(itemList.parentNode);

  itemList.parentNode.style.backgroundColor = '#f4f4f4';

  console.log(itemList.parentNode.parentNode);

// parentElement

    // para la mayoría de casos parentNode y parentElement son lo mismo

// childNodes

  console.log(itemList.childNodes);
    // retorna nodeList 
    // no es tan bueno porque retorna 'text' entre elementos que representa el espacio en blanco entre los elementos

  console.log(itemList.children);
    // retorna html collection

  console.log(itemList.children[1]);
    // retorna el elemento

  itemList.children[1].style.backgroundColor = 'yellow'  ;

  // first child
    // itemList.firstChild -- parecido a childNodes, no es bueno pues retorna espacio

  // first element child -- mejor!
  console.log(itemList.firstElementChild);

  console.log(itemList.lastElementChild);
  itemList.lastElementChild.textContent = 'Este es el ultimo elemento de la lista';
  
  // nextElementSibling y nextSibling
  console.log(itemList.nextElementSibling);

  // previousElementSibling y previousSibling
  itemList.previousElementSibling.style.color = 'green';