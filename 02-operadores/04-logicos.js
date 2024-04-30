let mayor = true;
let suscrito = true;

console.log(mayor && suscrito, 'and'); //true

console.log(mayor || suscrito, 'or'); //true

console.log(!mayor, 'not'); //false

console.log(!suscrito, 'not'); //false

console.log(mayor && !suscrito, 'and'); //false

console.log(mayor || !suscrito, 'or'); //true

console.log(!mayor && suscrito, 'and'); //false

console.log(!mayor || suscrito, 'or'); //true

console.log(!mayor && !suscrito, 'and'); //false

console.log(!mayor || !suscrito, 'or'); //false