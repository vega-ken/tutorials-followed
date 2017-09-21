// listen for form submit (escuchar todo evento de submit)

document.getElementById('myForm').addEventListener('submit', saveBookmark); // cuando se escucha el evento submit, se realiza la función sabeBookmark

function saveBookmark(e){ // 'e' es el evento parametro

  e.preventDefault(); // prevenir el submit del form

  //conseguir valores del form
  var siteName = document.getElementById('siteName').value; // sin 'value' al final, tomaría todo el elemento input (como HTML)
  var siteURL = document.getElementById('siteURL').value;

  //validacion de valores de entrada
  if(!validateForm(siteName,siteURL)){
    return false;
  }

  //guardar los valores en un objeto JSON
  var bookmark = {
    name : siteName,
    url : siteURL
  }

  /*
    // local storage test
      // solo se pueden grabar strings. Pero los jsons se pueden convertir a strings (parecido a serialización)

    localStorage.setItem('test', 'Hola mundo'); // 'test' es key y 'Hola mundo' es el string
    console.log(localStorage.getItem('test')); // consigues el texto relacionado con el key 'test', luego lo imprimes
    localStorage.removeItem('test'); // remueve el string. si vuelves a realizar console.log arrojaria null como respuesta
  */

  // lógica para guardar los bookmarks
    //guardas el bookmark entrante del form, pero si ya existe algun otro bookmark tienes que extraerlo para luego agregarle el nuevo item y luego volver a guardarlo


  if(localStorage.getItem('bookmarks') === null){
    //si no hay bookmarks guardados aún
    var bookmarks = [];
    bookmarks.push(bookmark); // agrega el JSON al arreglo
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks)); // guarda el arreglo de JSONS pero antes lo convierte a string
  }
  else{
    var bookmarks = JSON.parse( localStorage.getItem('bookmarks') ); // consigues el arreglo que guarda los JSONs y lo pasas de string a JSON
    bookmarks.push(bookmark); // agregas al arreglo de JSONs el ultimo nuevo bookmark
    localStorage.setItem('bookmarks',JSON.stringify(bookmarks)); // guardas el arreglo actualizado
  }

  fetchBookmarks();
}

//BORRAR UN BOOKMARK
function deleteBookmark(url){
  console.log(url);
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks')); // en JSON

  for (var i=0; i< bookmarks.length ; i++)
  {
    if(bookmarks[i].url == url){
      //remover el array que se reconoce por url
      bookmarks.splice(i,1); // remueve ese elemento
    }
  }

  // luego del loop, volver a grabar la info
  localStorage.setItem('bookmarks',JSON.stringify(bookmarks));

  //cuando haces clic en borrar, se tiene que volver a conseguir los bookmarks para ver que se borró
  fetchBookmarks();
}

//conseguir los bookmarks
function fetchBookmarks(){

  var bookmarks = JSON.parse(localStorage.getItem('bookmarks')); // en JSON

  var bookmarksResults = document.getElementById('bookmarksResults');

  bookmarksResults.innerHTML = '';

  for (var i = 0; i < bookmarks.length ; i++)
  {
    var name = bookmarks[i].name;
    var url = bookmarks[i].url;

    bookmarksResults.innerHTML +=  // += agrega
      '<div class="well">'+
        '<h3>'+
          name+' <a class="btn btn-default" target="_blank" href="'+url+'">Visit</a> '+ // considerar los espacios || target="_blank" abre una nueva pestaña
          ' <a onclick="deleteBookmark(\''+url+'\')" class="btn btn-danger" href="#">Delete</a> '+ // atención al \'
        '</h3>'+
      '</div>';
  }
}

function validateForm(siteName, siteURL) {
  if (!siteName || !siteURL){
    alert('Please fill in the form');
    return false; // ya no agrega el bookmark
  }

  var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
  var regex = new RegExp(expression);

  if(!siteURL.match(regex))
  {
    alert('please use a valid URL');
    return false;
  }

  return true;
}
