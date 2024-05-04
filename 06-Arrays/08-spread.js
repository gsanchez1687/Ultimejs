//combinar array de una forma mejor
//es una funcionalidad nueva del ES6
let personajesSaintSeiya = ['Seiya', 'Shiryu', 'Hyoga', 'Shun', 'Ikki', 'Saori', 'Shaina', 'Marin', 'Aioria', 'Saga', 'Shaka', 'Milo', 'Camus', 'Aphrodite', 'Deathmask', 'Aldebaran', 'Shura', 'Dohko', 'Mascara de la muerte', 'Aioros', 'Shion', 'Mu', 'Kiki', 'Pandora', 'Hades', 'Poseidon', 'Abel', 'Odin', 'Eris', 'Lucifer', 'Thanatos', 'Hypnos', 'Athena'];
let nombredepokemones = ['Pikachu', 'Charmander', 'Bulbasaur', 'Squirtle', 'Jigglypuff', 'Meowth', 'Psyduck', 'Machop', 'Geodude', 'Gengar', 'Onix', 'Snorlax', 'Magikarp', 'Eevee', 'Porygon', 'Dratini', 'Chikorita', 'Cyndaquil', 'Totodile', 'Togepi', 'Mareep', 'Bellossom', 'Marill', 'Hoppip', 'Sunkern', 'Yanma', 'Wooper', 'Murkrow', 'Misdreavus', 'Unown'];


let arrayCombinado = [...personajesSaintSeiya, ...nombredepokemones];
console.log(arrayCombinado);