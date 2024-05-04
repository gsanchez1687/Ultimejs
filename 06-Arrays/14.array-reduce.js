//reduce sirve para reducir un array a un solo valor
let nunero = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,29,30];

let suma = nunero.reduce((acumulador, numero) => acumulador + numero, 0);
console.log(suma);

let anidado = [[1,2,3], [4,5,6], [7,8,9],10,11];
let plano = anidado.reduce((acumulador, array) => acumulador.concat(array), []);
console.log(plano);

//listar array con muchos objetos
let santosdorados =[
    {nombre: 'Aioria', constelacion: 'Leo', edad: 20},
    {nombre: 'Milo', constelacion: 'Escorpio',edad: 23},
    {nombre: 'Shura', constelacion: 'Capricornio', edad: 25},
    {nombre: 'Camus', constelacion: 'Acuario', edad: 23},
    {nombre: 'Aioros', constelacion: 'Sagitario', edad: 25},
    {nombre: 'Saga', constelacion: 'Geminis', edad: 27},
    {nombre: 'Mascara de Muerte', constelacion: 'Cancer', edad: 28},
    {nombre: 'Afrodita', constelacion  : 'Piscis', edad: 22},
    {nombre: 'Aldebaran', constelacion: 'Tauro', edad: 24},
    {nombre: 'Shaka', constelacion: 'Virgo', edad: 26},
];

cosnt = indexado = santosdorados.reduce((acumulador, santo) => ({
    ...acumulador,
    [santo.nombre]: santo
}), {});

console.log(indexado);