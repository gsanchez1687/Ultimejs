//dividir array por tipo
const listarray = [1, 'hola', 2, 'adios', 3, 'hasta luego', 4, 'nos vemos',{id: 1, nombre: 'Juan'}];
function devideportipos(array){
   return {
         numeros: array.filter(n => typeof n === 'number'),
         strings: array.filter(s => typeof s === 'string'),
         objetos: array.filter(o => typeof o === 'object')
   }
}

const resultado = devideportipos(listarray)
console.log(resultado);