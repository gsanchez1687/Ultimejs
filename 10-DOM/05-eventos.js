//Eventos
let form = document.createElement('form');
form.id = 'formulario';

let input = document.createElement('input');
input.setAttribute('type', 'text');

let btn = document.createElement('button');
btn.innerText = 'Enviar';

form.append(input, btn);
document.body.append(form);


//crear un evento
form.onmouseenter = e => {
    console.log('Entrando al formulario', e);
}

form.onmouseleave = e => {
    console.log('Saliendo del formulario', e);
}

input.onfocus = e => {
    console.log('Foco en el formulario', e);
}

input.onblur = e => {
    console.log('Foco fuera del formulario');
}

btn.onclick = e => {
    e.preventDefault();
    console.log('Enviando formulario1', e);
}

btn.addEventListener('click', e => {
    e.preventDefault();
    console.log('Enviando formulario2', e);
});