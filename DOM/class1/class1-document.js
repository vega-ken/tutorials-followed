/*  --------DOCUMENT-------- */


//examinar el documento
  //console.dir(document);

console.log(document.domain);

console.log(document.URL);
console.log(document.title);

console.log(document.doctype); // el tipo de HTML (5(?) por ejemplo)

console.log(document.head);
console.log(document.body);

console.log(document.all); // html collection 
  // en el orden del documento
  // se pueden acceder a traves del index

  console.log(document.all[10]);

  //document.all[10].textContent = 'Hola';
    // así no se debe seleccionar por cierto porque cuando html es dinamico se mueven los indexs

console.log(document.forms); // html collection  de todos los forms

  console.log(document.forms[0]); // el primer form del html collection

console.log(document.links);

/* html collection no es un array, tendrías que convertirlo primero a array para usar el metodo reverse por ejemplo */

console.log(document.images);





