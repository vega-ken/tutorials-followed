let output = document.getElementById('output');
let itemInput = document.querySelector('input[type="text"]');


itemInput.addEventListener('keyup', runEvent);
  // keydown espera hasta que sueltes la tecla
  // también existe keypress

itemInput.addEventListener('cut',runEvent);
  /*otros eventos
      focus - salta cuando entras a un input
      blur - lo opuesto a focus
  */

function runEvent(e){
  console.log(`Event type: ${e.type}. -- value : ${e.target.value}`);
  output.innerHTML = `<h3>${e.target.value}</h3>`
  //document.body.style.display = 'none'; 
}

let select = document.querySelector('select');

select.addEventListener('change',runEvent);


