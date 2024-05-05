const usuarios = [
    {edad: 15, nombre: 'Juan', plan: 'premium'},
    {edad: 23, nombre: 'Pepe', plan: 'gratuito'},
    {edad: 16, nombre: 'Rosa', plan: 'premium'},
    {edad: 23, nombre: 'Luis', plan: 'gratuito'},
    {edad: 25, nombre: 'Ana', plan: 'premium'},
    {edad: 18, nombre: 'Lucas', plan: 'premium'},
    {edad: 28, nombre: 'Maria', plan: 'gratuito'},
    {edad: 22, nombre: 'Luisa', plan: 'premium'},
    {edad: 24, nombre: 'Jose', plan: 'gratuito'},
    {edad: 14, nombre: 'Andrea', plan: 'premium'},
];

function getUsuariosPorPlan(plan){
    return usuarios.filter(u => u.plan === 'premium');
}

function getUsuriosMayoresDeEdad(edad){
    return usuarios.filter(u => u.edad >= edad);
}

function getUsuariosMenoresDeEdad(edad){
    return usuarios.filter(u => u.edad < edad);
}

//console.log( getUsuariosPorPlan('premium') );
//console.log( getUsuriosMayoresDeEdad(18) );
//console.log( getUsuariosMenoresDeEdad(18) );


//calcular la cantidad de usuarios que hay en el array
function cantidadUsuariosPremiun(usuarios){
    return usuarios.reduce((acumulador, usuario) =>
        usuario.plan === 'premium' ? acumulador+ 1 : acumulador, 0);
}

function cantidadUsuariosFree(usuarios){
    return usuarios.reduce((acumulador, usuario) =>
        usuario.plan === 'gratuito' ? acumulador+ 1 : acumulador,0);
}

function cantidadMayoreEdad(usuarios){
    return usuarios.reduce((acumulador, usuario) =>
        usuario.edad >= 18 ? acumulador+ 1 : acumulador, 0);
}

function cantidadMenoresEdad(usuarios){
    return usuarios.reduce((acumulador, usuario) =>
        usuario.edad < 18 ? acumulador+ 1: acumulador, 0
    );

}

console.log(cantidadUsuariosPremiun(usuarios));
console.log(cantidadUsuariosFree(usuarios));
console.log(cantidadMayoreEdad(usuarios));
console.log(cantidadMenoresEdad(usuarios));