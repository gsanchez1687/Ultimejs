//combinar 2 arrays
let personajesDragonBallz = ['Goku', 'Vegeta', 'Gohan', 'Piccolo', 'Krillin', 'Yamcha', 'Tenshinhan', 'Chaoz', 'Mutenroshi', 'Bulma', 'Trunks', 'Goten', 'Videl', 'Pan', 'Mr. Satan', 'Dende', 'Shenlong', 'Kami', 'Raditz', 'Nappa', 'Freezer', 'Cell', 'Majin Boo', 'Androide 17', 'Androide 18', 'Androide 19', 'Androide 20', 'Bardock', 'Broly', 'Cooler', 'Gogeta', 'Gotenks', 'Shenron', 'Tapion', 'Zarbon', 'Dodoria', 'Reecom', 'Ginyu', 'Jeice', 'Burter', 'Guldo', 'Vegetto', 'Kibito', 'Kaiosama', 'Kibito-shin', 'Krilin', 'Yajirobe', 'Oolong', 'Puar', 'Launch', 'Mr. Popo', 'Uub', 'Bills', 'Whis', 'Jaco', 'Black Goku', 'Zamasu', 'Trunks del futuro', 'Goku Black', 'Caulifla', 'Kale', 'Jiren', 'Toppo', 'Dispo', 'Kefla', 'Aniraza', 'Broly', 'Moro', 'Granola', 'Gas', 'Elece', 'Oatmeel', 'Raspberry', 'Strawberry', 'Blueberry', 'Lemon', 'Lime', 'Apple', 'Peach', 'Banana', 'Grape', 'Coconut', 'Watermelon', 'Pineapple', 'Raspberry', 'Cherry', 'Mango', 'Papaya', 'Kiwi', 'Cantaloupe', 'Honeydew', 'Orange', 'Tangerine', 'Pear', 'Plum', 'Apricot', 'Nectarine', 'Pomegranate', 'Lychee', 'Guava', 'Passionfruit', 'Dragonfruit', 'Starfruit', 'Persimmon', 'Peach', 'Cherry', 'Apple', 'Pear', 'Plum', 'Apricot', 'Nectarine', 'Pomegranate', 'Lychee', 'Guava', 'Passionfruit', 'Dragonfruit', 'Starfruit', 'Persimmon', 'Peach', 'Cherry', 'Apple', 'Pear', 'Plum', 'Apricot', 'Nectarine', 'Pomegranate'];
let personajesSaintSeiya = ['Seiya', 'Shiryu', 'Hyoga', 'Shun', 'Ikki', 'Saori', 'Shaina', 'Marin', 'Aioria', 'Saga', 'Shaka', 'Milo', 'Camus', 'Aphrodite', 'Deathmask', 'Aldebaran', 'Shura', 'Dohko', 'Mascara de la muerte', 'Aioros', 'Shion', 'Mu', 'Kiki', 'Pandora', 'Hades', 'Poseidon', 'Abel', 'Odin', 'Eris', 'Lucifer', 'Thanatos', 'Hypnos', 'Athena'];
let personajesCombinados = personajesDragonBallz.concat(personajesSaintSeiya);
console.log(personajesCombinados);

//dividir un array
let dividirArray = personajesCombinados.slice(1, personajesDragonBallz.length);
console.log(dividirArray);