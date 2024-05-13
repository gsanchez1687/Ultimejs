//elemento html

let elementoParrafo = document.createElement('p');

elementoParrafo.innerText = '<ul><li>Elemento p creado con innerText</li></ul>';
elementoParrafo.innerHTML = '<ul><li>Elemento < p > creado desde el DOM </li></ul>';
elementoParrafo.style = 'color: red;'
elementoParrafo.className = 'clase1 clase2';
elementoParrafo.id = 'id1';
elementoParrafo.setAttribute('data-nombre', 'valor');
elementoParrafo.getAttribute('data-nombre');
document.body.append(elementoParrafo);