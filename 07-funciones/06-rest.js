//Rest
const sumar = (a, b, ...rest) => {
    console.log(rest);
}

console.log(sumar(1, 2, 3, 4, 5, 6)); //15


//emplo de rest
const logMessage = (descripcion, ...rest) => {
    for(let menssage of rest){
        console.log(descripcion,menssage);
    }
}
//Primer parametro: servidor
//Rest: Hola, Mundo, desde, Javascript
//const result = logMessage('Servidor:','Peticion aceptada', 'Socket activo');
//console.log(result); //Servidor Hola, Servidor Mundo, Servidor desde, Servidor Javascript

let mensajes = ['Error 1:','Peticion aceptada', 'Socket activo'];
const log= logMessage('Cliente:',...mensajes); //Error 1: Peticion aceptada, Error 1: Socket activo
console.log(log); //undefined