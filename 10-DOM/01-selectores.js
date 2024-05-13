//Select

//devuelve un elemento
let htmlElement =  document.getElementById('cuerpo');
console.log(htmlElement.textPre);

//devuelve un HTMLCollection
let elementosred = document.getElementsByClassName('red');
console.log(elementosred);


//devuelve un NodeList
let elementoGuille = document.getElementsByName('guille');
console.log(elementoGuille);

//devuelve un HTMLCollection
let parafos = document.getElementsByTagName('p');
console.log(parafos);



//Estos dos ultimos son muy lentos ya que recorren todo el DOM
//devuele HTMLElement
let elemento = document.querySelector('#cuerpo');
console.log(elemento);

//devuelve NodeList
let els = document.querySelectorAll('p');
console.log(els);