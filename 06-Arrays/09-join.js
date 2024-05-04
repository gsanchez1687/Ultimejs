//join sirve para unir los elementos de un array en un string
let personajesSaintSeiya = ['Seiya', 'Shiryu', 'Hyoga', 'Shun', 'Ikki', 'Saori', 'Shaina', 'Marin', 'Aioria', 'Saga', 'Shaka', 'Milo', 'Camus', 'Aphrodite', 'Deathmask', 'Aldebaran', 'Shura', 'Dohko', 'Mascara de la muerte', 'Aioros', 'Shion', 'Mu', 'Kiki', 'Pandora', 'Hades', 'Poseidon', 'Abel', 'Odin', 'Eris', 'Lucifer', 'Thanatos', 'Hypnos', 'Athena'];
let mensaje = personajesSaintSeiya.join(' | ');
console.log(mensaje);

//split sirve para dividir un string en un array
let mensaje2 = "hola como estas espero que bien";
let palabras = mensaje2.split(' ');
console.log(palabras.join('-'));