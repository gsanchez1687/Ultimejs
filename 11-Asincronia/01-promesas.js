//las promesas en javascript son objetos que representan la terminación o el fracaso de una operación asíncrona
//la promesa puede estar en uno de los siguientes estados:
// - pendiente
// - rechazada
// - cumplida

//sirven para:
// - evitar el callback hell
// - manejar errores de manera más sencilla
// - realizar tareas asíncronas de manera más sencilla
// - consultas a la base de datos
// - peticiones a un servidor
// - webworkers (hilos de ejecución en javascript)

//creación de una promesa
let promesa = new Promise( (resolve, reject) => {
    resolve(42);
});

console.log(promesa);
// Promise { 42 }


let promesa2 = new Promise( (resolve, reject) => {
    setTimeout(() => { resolve(42) }, 5000);
});
console.log(promesa2);

//Resolviendo una promesa rechazado
let promesa3 = new Promise( (resolve, reject) => {
    setTimeout(() => { resolve("Hola mundo") }, 5000);
});

promesa3.then(
    valor => console.log(valor),
    e =>console.log(e)
)

console.log(promesa3);