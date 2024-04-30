//los objetos son de tipo de referencia
//los objetos son una agrupacion de datos que tiene sentidos que esten juntos
//personajes de anime
let nombre = 'Goku';
let raza = 'Saiyajin';
let serie=  'Dragon Ball';

//objeto literal
let personajes = {
    nombre: 'Goku',
    raza: 'Saiyajin',
    serie: 'Dragon Ball',
}


console.log(personajes);
console.log(personajes.nombre);
console.log(personajes['raza']);

personajes.serie = 'Dragon Ball Z';
personajes['nombre'] = 'Vegeta';
console.log(personajes);

delete personajes.serie;
console.log(personajes);