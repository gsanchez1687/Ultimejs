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


//obtener los usuarios premium
//ordernar de mayor a menor por edad
//devolver el nombre del usuario
//crear plantilla html
//imprimir en consola

function geyUsersPremium(array){
    return array.filter(item => item.plan === 'premium')
    .sort((a, b) => b.edad - a.edad)
    .map(item => `<ul>${item.nombre}</ul>`);
}

const usersPremium = geyUsersPremium(usuarios);
const html = `<li>${usersPremium.join('')}</li>`;
console.log(html);