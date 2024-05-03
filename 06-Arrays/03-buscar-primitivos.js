
//Buscar numeros primitivos en un array
cosnt = personajes = ['Goku', 'Vegeta', 'Trunks', 'Gohan', 'Piccolo', 'Krillin', 'Yamcha', 'Tenshinhan', 'Chaoz', 'Mutenroshi','Goku'];
console.log(personajes.indexOf('Krillin'));
console.log(personajes.indexOf('milk'));

//buscar repetidos
console.log(personajes.indexOf('Goku'));

//buscar desde el ulktimo elemento que consigio con la palabra goku
console.log(personajes.lastIndexOf('Goku'));

//nuevo metodo paa buscar y si consigue que devuelva un booleano
console.log(personajes.includes('Goku'));