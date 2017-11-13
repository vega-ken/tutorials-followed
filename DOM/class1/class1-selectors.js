/*  --------SELECTORS-------- */

console.log(document.getElementById('header-title'));

let headerTitle = document.getElementById('header-title');

console.log(headerTitle.textContent);
// innerText no muestra los span con display none - toma más atención al estilo
// textContent muestra todo el texto así tenga display none

headerTitle.textContent = 'Nuevo titulo';

headerTitle.innerHTML = '<h3>Hello</h3>'; // pone html dentro del elemento ( no lo cambia, pone el html dentro solamente )

// cambiar estilos

header = document.getElementById('main-header');
header.style.borderBottom = 'solid 3px #000'; // camel case para los estilos

// conseguir elementos por clase

  // conseguir todos los list items

  let items = document.getElementsByClassName('list-group-item');
  console.log(items); // HTML collection

  console.log(items[1]);

  items[1].textContent = 'Hello two';
  items[1].style.fontWeight = 'bold';
  items[1].style.backgroundColor = 'yellow';

    // items.style.backgroundColor = 'blue'; -- esto no se puede realizar
  
  for (let i = 0 ; i < items.length ; i++){
    items[i].style.backgroundColor = '#f4f4f4'; 
  }

// conseguir elementos por tag name

  let items2 = document.getElementsByTagName('li');
    // html collection de todos los li de la pagina

    // puedes hacer exactamente lo mismo luego que ya se vio

// QUERY SELECTOR
  // parecido a jquery, pero solo se usa para un item solamente
  // solo consigue el primero!!! si hay mas de uno, solo consigue el primero

  let header2 = document.querySelector('#main-header'); // en jquery sería $('#main-header');

  header2.style.borderBottom = 'solid 4px #ccc';

  let input = document.querySelector('input'); // solo coge el primer input
  input.value = 'Hola mundo';

  let submit = document.querySelector("input[type='submit']"); // ser mas especifico ayuda a conseguir el primer boton
  submit.value = 'SEND';

  // trabajando con elementos de una lista

  let item3 = document.querySelector('.list-group-item');
  item3.style.color = 'red';

  let lastItem = document.querySelector('.list-group-item:last-child');
  lastItem.style.color = 'blue';

  let secondItem = document.querySelector('.list-group-item:nth-child(2)'); // solo el 2do elemento
  secondItem.style.color = 'coral';

// QUERY SELECTOR ALL

  // existen 2 h2 en el documento actual, los usaremos de ejemplo

  let titles = document.querySelectorAll('.title');
    // devuelve un nodelist ( __proto__ : Nodelist )
      // es parecido a un html collection, pero te permite ejecutar métodos de un arreglo

  console.log(titles);

  titles[0].textContent = 'Hi there'; // cambiando el primer titulo

  let odd = document.querySelectorAll('li:nth-child(odd)'); // pseudo selector
    // tambien se puede con even
    // odd = impares
    // even = pares

  for (let i = 0 ; i < odd.length ; i++){
    odd[i].style.backgroundColor = 'yellow'; 
  }






  
  

