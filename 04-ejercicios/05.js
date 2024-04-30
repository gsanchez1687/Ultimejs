
function getNumeroMayorNumeroMenor(array) {
  
    let mayor = array[0];
    let menor = array[0];
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] > mayor) {
        mayor = array[i];
        }
        if (array[i] < menor) {
        menor = array[i];
        }
    }
    
    return { mayor, menor };

}

let salida = getNumeroMayorNumeroMenor([1, 2, 3, 4, 5]);
console.log(salida); // { mayor: 5, menor: 1 }