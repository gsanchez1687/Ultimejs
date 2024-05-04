//array map
//crea nuevo array apartir de los datos de otro array
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
]

let presidentesDeVenezuela = [
    {nombre: 'José Antonio Páez', periodo: '1830-1835', fechaNacimiento: '1790-06-13'},
    {nombre: 'Carlos Soublette', periodo: '1837-1839', fechaNacimiento: '1789-12-15'},
    {nombre: 'José Tadeo Monagas', periodo: '1847-1851', fechaNacimiento: '1784-10-28'},
    {nombre: 'Hugo Chávez', periodo: '1999-2013', fechaNacimiento: '1954-07-28'},
    {nombre: 'Nicolás Maduro', periodo: '2013-presente', fechaNacimiento: '1962-11-23'},
    {nombre: 'Juan Guaidó', periodo: '2019-presente', fechaNacimiento: '1983-07-28'},
]

let lista = santosdorados.filter(santo => santo.edad < 25).map(santo => `<li>${santo.nombre}</li>`)
let html = `<ol>${ lista.join('') }</ol>`
console.log(html)