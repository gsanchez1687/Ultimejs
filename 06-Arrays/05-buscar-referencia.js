//Buscar elemento que son tipo de referencia
//En este caso se busca un objeto dentro de un array
const personas = [
    {id: 1 ,nombre: 'Juan', edad: 23},
    {id: 2, nombre: 'Pablo', edad: 34},
    {id: 3, nombre: 'Alejandra', edad: 45},
    {id: 4, nombre: 'Karen', edad: 56},
    {id: 5, nombre: 'Mirta', edad: 67}
];

//utilizando arrow function
const persona = personas.find( personas => personas.id === 3);
console.log(persona); // { id: 3, nombre: 'Alejandra', edad: 45 }
