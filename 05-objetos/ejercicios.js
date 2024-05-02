//Construir usuario con funcion constructor
function Usuario(id ,nombre, apellido, libros, mascotas){
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
}

const usuario1 = new Usuario( Math.random(1,100) ,"Juan", "Perez", ["El señor de los anillos", "Harry Potter"], ["Perro", "Gato"]);
const usuario2 = new Usuario(Math.random(1,100),"Maria", "Gomez", ["El principito", "El alquimista"], ["Pez", "Conejo"]);


console.log(usuario1, usuario2);


//Factory function
function UsuarioFactory(id ,nombre, apellido, libros, mascotas){
    return {
        id,
        nombre,
        apellido,
        libros,
        mascotas
    }
}

const usuario3 = UsuarioFactory( Math.random(1,100) ,"Juan", "Perez", ["El señor de los anillos", "Harry Potter"], ["Perro", "Gato"]);
const usuario4 = UsuarioFactory(Math.random(1,100),"Maria", "Gomez", ["El principito", "El alquimista"], ["Pez", "Conejo"]);

console.log(usuario3, usuario4);


//construir una funcion para saber si 2 objetos son iguales
function sonIguales(obj1, obj2){
    return JSON.stringify(obj1) === JSON.stringify(obj2);
}

const objeto1 = {
    id: 1,
    nombre: 'Guillermo'
}
const objeto2 = {
    id: 1,
    nombre: 'Enrique'
}

const comparacion = sonIguales(objeto1, objeto2);
console.log(comparacion);


//saber si en una funcion existe un metodo
const objeto3 = {
    id: 1,
    nombre: 'Guillermo',
    login: function(){},
    logout: function(){},
}

function tieneMetodo(obj){
   for(let llave in obj){
       if(typeof obj[llave] === 'function'){
           console.log(llave);
       }
   }
}

console.log(tieneMetodo(objeto3));


// Agregar ID a un objeto, toca pasarlo por referencia
let objet4 = {
    nombre: 'Guillermo',
    apellido: 'Gomez'
}
function AgregarID(obj){
    if(typeof obj == 'object'){
        obj.id = Math.random(1,100);
    }
    return obj;
}

console.log(AgregarID(objet4));