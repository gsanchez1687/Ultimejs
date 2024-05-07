//Fat arrow function
//fat arrow function no tienen arguments
//no tienem super ni this
//las arrow function no tienen argumentos
//Las arrow function son una version reducida de las funciones
const sumar = (a, b) => {
    return Array.from(arguments).reduce((acc,el) => acc + el);
 }
 
 console.log(sumar(1, 2, 3, 4, 5)); //15