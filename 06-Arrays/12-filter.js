//filter
//array de eobjeto con los datos de los saint seiya
let santosdorados =[
    {nombre: 'Aioria', constelacion: 'Leo', edad: 20},
    {nombre: 'Milo', constelacion: 'Escorpio', edad: 23},
    {nombre: 'Shura', constelacion: 'Capricornio', edad: 25},
    {nombre: 'Camus', constelacion: 'Acuario', edad: 23},
    {nombre: 'Aioros', constelacion: 'Sagitario', edad: 25},
    {nombre: 'Saga', constelacion: 'Geminis', edad: 27},
    {nombre: 'Mascara de Muerte', constelacion: 'Cancer', edad: 28},
    {nombre: 'Afrodita', constelacion : 'Piscis', edad: 22},
    {nombre: 'Aldebaran', constelacion: 'Tauro', edad: 24},
    {nombre: 'Shaka', constelacion: 'Virgo', edad: 26},
]

let santosdoradosjovenes = santosdorados.filter(santo => santo.edad < 25)
console.log(santosdoradosjovenes)

let satodoradosmayores = santosdorados.filter(santo => santo.edad > 25)
console.log(satodoradosmayores)