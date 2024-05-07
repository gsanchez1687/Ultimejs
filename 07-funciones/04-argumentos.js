//Argumentos

function sumar(a, b) {
   return Array.from(arguments).reduce((acc,el) => acc + el);
}

console.log(sumar(1, 2, 3, 4, 5)); // 3