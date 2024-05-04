//Ordernar array
//metodo con sort y reverse
//sort ordena los elementos de un array localmente y devuelve el array ordenado.
let numerosal100desordenados = [12, 45, 69, 23, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55, 57, 59, 61, 63, 65, 67, 69, 71, 73, 75, 77, 79, 81, 83, 85, 87, 89, 91, 93, 95, 97, 99];
let numerosal100ordenados = numerosal100desordenados.sort();
let numerosreverse = numerosal100desordenados.reverse();
console.log(numerosal100ordenados);
console.log(numerosreverse);

//ordenando letras por su valor en la tabla ASCII
let letrasdesordenadas = ['z', 'y', 'x', 'w', 'v', 'u', 't', 's', 'r', 'q', 'p', 'o', 'n', 'm', 'l', 'k', 'j', 'i', 'h', 'g', 'f', 'e', 'd', 'c', 'b', 'a'];
let letrasordenadas = letrasdesordenadas.sort();
let letrasreverse = letrasordenadas.reverse();
console.log(letrasordenadas,letrasreverse);


//ordenando letras con mayusculas y minusculas por su valor en la tabla ASCII
let letrasconmayusculasyminusculasdesorndedenadas = ['Z', 'y', 'X', 'w', 'V', 'u', 'T', 's', 'R', 'q', 'P', 'o', 'N', 'm', 'L', 'k', 'J', 'i', 'H', 'g', 'F', 'e', 'D', 'c', 'B', 'a'];
let ordenenar = letrasconmayusculasyminusculasdesorndedenadas.sort( (a,b) => a.toLowerCase().localeCompare(b.toLowerCase()));
console.log(ordenenar);