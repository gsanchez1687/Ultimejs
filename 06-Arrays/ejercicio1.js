//numeros absolutos de un array
function numetosabsolutos(numero) {
     return numero.map(n => Math.abs(n));
}
const numerosconnegativos = [1, -2, 3, -4, 5, -6, 7, -8, 9, -10];
const resultado = numetosabsolutos(numerosconnegativos)
console.log(resultado);
