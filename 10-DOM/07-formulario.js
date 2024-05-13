//Formularios
//crear funcion de validacion de formulario
let validate = data => {
    let erros = {};
    if(!data.name){
        erros.name = 'El nombre es obligatorio';
    }
    if(!data.lastname){
        erros.lastname = 'El nombre es obligatorio';
    }
    return erros;
}
let render = ({erros,data}) => {
    return `
    <form name='formulario'>
        <div>
          <label>Nombre:</label>
          <input type='text' name='name' ${data.name}>
        </div>
        <div>
          <label>Apellido:</label>
          <input type='text' name='lastname' ${data.lastname}>
        </div>
        <div>
          <button>Enviar</button>
        </div>
    </form>
    `
}

let form = document.createElement('form');
form.innerHTML = render();
document.body.appendChild(form);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let data = Array.from(e.target.elements).reduce((acc, el) => {
        acc[el.name] = el.value;
        return acc;
    }, {});
     const erros = validate(data);
     if(Object.keys(erros).length > 0){
        let html = render({erros,data});
        form.innerHTML = html;
    }
});
