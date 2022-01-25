
const mytime = setInterval(intervalo,1000);

let atributo = '';

function intervalo(){

 atributo = document.querySelector('#caja').getAttribute('data-d');

   if(atributo === 'true'){

       document.querySelector('#caja').setAttribute('class','decorado');
      clearInterval(mytime);
   }

}