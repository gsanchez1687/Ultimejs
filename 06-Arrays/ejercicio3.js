const usuarios = [
    {edad: 20, nombre: 'Juan', plan: 'premium'},
    {edad: 23, nombre: 'Pepe', plan: 'gratuito'},
    {edad: 25, nombre: 'Rosa', plan: 'premium'},
    {edad: 23, nombre: 'Luis', plan: 'gratuito'},
    {edad: 25, nombre: 'Ana', plan: 'premium'},
    {edad: 27, nombre: 'Lucas', plan: 'premium'},
    {edad: 28, nombre: 'Maria', plan: 'gratuito'},
    {edad: 22, nombre: 'Luisa', plan: 'premium'},
    {edad: 24, nombre: 'Jose', plan: 'gratuito'},
    {edad: 26, nombre: 'Andrea', plan: 'premium'},
];

function getUsuariosPorPlan(plan){
   return usuarios.filter(u => u.plan === 'premium');
}

const resultado = getUsuariosPorPlan('premium');
console.log(resultado);