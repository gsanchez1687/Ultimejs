//Manipulación del DOM
let elemento = document.createElement('h1');
elemento.innerText = 'Manipulación del DOM';


//Añadir un elemento al final del body
document.body.append(elemento);

elemento.remove();
document.body.prepend(elemento);


let elementoDiv = document.createElement('div');
elementoDiv.innerText = 'Elemento div creado desde el DOM';

document.body.insertBefore(elementoDiv, elemento);

document.body.insertAdjacentElement('beforebegin', elementoDiv);
document.body.insertAdjacentElement('afterbegin', elementoDiv);
document.body.insertAdjacentElement('beforeend', elementoDiv);
document.body.insertAdjacentElement('afterend', elementoDiv);