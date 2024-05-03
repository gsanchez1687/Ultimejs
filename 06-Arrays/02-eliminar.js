//Eliminar elementos de un array
const frutas = ['Manzana', 'Banana', 'Pera', 'Uva', 'Sandía', 'Melón', 'Durazno', 'Cereza', 'Fresa', 'Kiwi'];

frutas.pop(); //Elimina el último elemento del array
let frutaEliminada = frutas.pop(); //Guardamos el elemento eliminado en una variable
console.log(frutaEliminada,frutas);

//eliminar primer elemento de un array
const primerafruta = frutas.shift();
console.log(primerafruta);

//eliminar elementos entre medio de un array
const eliminarentremedios =  frutas.splice(1, 5);
console.log(eliminarentremedios, frutas);