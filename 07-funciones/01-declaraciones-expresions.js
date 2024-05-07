console.log(resta(1,2)); //hosting


//Declaraciones vs Expresiones

//1. Declaracion de funcion: Function Declaration

//Funcion nombrada - > Named Function
function suma(a, b) {
    console.log('Funcion nombrada');
}
//funcion anonima - > Anonymous Function
//function (){
//    console.log('function anonima');
//}


//2. Expresion de funcion: Function Expression
//Expresion de funcion anonima
const resta = function(a,b) { //anonymous function
    console.log('function expression');
}

const multiplicacion = function suma(a, b) {//named function expression
    console.log('function expression');
}

const divicion = () =>{ //anonymous arrow function
    console.log('arrow function');
}