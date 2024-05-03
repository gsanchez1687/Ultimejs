//Arrow Function
//esto es una funcion normal
function sumar(a, b) {
    return a + b;
}
const resultado = sumar(2, 3);

//esta es otra alternativa de escribir la misma funcion
//esta forma es convenriente si la quiero usar en una sola linea y no necesito mas de una linea de codigo
//si necesito mas de una linea de codigo, entonces debo usar la forma anterior
const sumar2 = (a, b) => {
    return a + b;
}

//forma mas resumida de escribir arrow function
const sumar3 = (a, b) => a + b;
console.log(sumar3(2, 3));