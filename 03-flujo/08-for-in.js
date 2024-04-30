let animales = {
    id: 1,
    name: 'Gato',
    age: 2,
    color: 'negro',
    comida: 'higado'
    };


for(let prod in animales){
    console.log(prod, animales[prod]);
}

//arreglo de personajes de starwar
let personajesStarWars = [
    { name: 'Luke Skywalker', age: 19, gender: 'male' },
    { name: 'Princess Leia', age: 19, gender: 'female' },
    { name: 'Han Solo', age: 29, gender: 'male' },
    { name: 'Darth Vader', age: 45, gender: 'male' },
    { name: 'Yoda', age: 900, gender: 'male' }
];

for (let indice in personajesStarWars){
    console.log(indice, personajesStarWars[indice]);
}