//divide por tipc de dato

const usuarios = [
    "hola",
    30,
    true,
    false,
    {},
    {id: 1, nombre: 'Juan'},
    ['Juan', 'Pepe', 'Lucas'],
];

function dividirPorTipoDeDato(datos){
 return datos.reduce((acumulador, dato) => {
    if(typeof dato === 'string'){
        acumulador.string.push(dato);
    } else if(typeof dato === 'number'){
        acumulador.number.push(dato);
    } else if(typeof dato === 'boolean'){
        acumulador.boolean.push(dato);
    } else if(typeof dato === 'object'){
        acumulador.object.push(dato);
    } else if(Array.isArray(dato)){
        acumulador.array.push(dato);
    }
    return acumulador;
 }, {string: [], number: [], boolean: [], object: [], array: []});
}

console.log(dividirPorTipoDeDato(usuarios));