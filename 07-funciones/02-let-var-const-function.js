
//esta funcion no se va al objeto de window
function saludo() {
    let saludo = 'Hola desde la funcion';
    return saludo;
}

//Estas variable no se van al objeto de window
let variableLet = 'Saludos desde el let';
const variableConst = 'saludos desde el const';

//Esta variable se va al objeto de window
var variableVar = 'variable desde var';


console.log(saludo());
console.log(variableVar);
console.log(variableLet);
console.log(variableConst);
console.log(window.variableVar);