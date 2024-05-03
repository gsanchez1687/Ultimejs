//agregar elementos al final de un array

let numeros = [1, 2, 3, 4, 5];
//con push agregamos un elemento al final del array
numeros.push(6);
numeros.push('Guillermo')
console.log(numeros);

//agregar elementos al principio de un array
//con unshift agregamos un elemento al principio del array
let numeros2 = [1, 2, 3, 4, 5];
numeros2.unshift(0);
numeros2.unshift('Guillermo');

console.log(numeros2);

//uso del splice
let palabras = ['hola', 'como', 'estas', 'tu'];
palabras.splice(1, 0, 'mundo');
console.log(palabras);