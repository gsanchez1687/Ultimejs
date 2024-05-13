//Implementando herencia
function Entidad() {}
Entidad.prototype.getPuntos = function() {
    console.log('Ataque con daño de: ' + this.ataque + ' puntos');
}

Entidad.prototype.ataque = function() {
    console.log('Ataca con ' + this.nombreAtaque);
}

function Pikachu() {
    this.nombre = 'Pikachu';
    this.vida = 100;
    this.ataque = 55;
    this.defensa = 30;
    this.tipo = 'Electrico';
    this.devilidad = 'Tierra';
    this.evolucion = 'Raichu';
    this.nombreEntrenador = 'Ash';
    this.genero = 'Macho';
    this.nivel = 1;
    this.nombreAtaque = 'Impactrueno';
}

function Charmander(){
    this.nombre = 'Charmander';
    this.vida = 100;
    this.ataque = 55;
    this.defensa = 30;
    this.tipo = 'Fuego';
    this.devilidad = 'Agua';
    this.evolucion = 'Charmeleon';
    this.nombreEntrenador = 'Ash';
    this.genero = 'Macho';
    this.nivel = 1;
    this.nombreAtaque = 'Ascuas';
}

//Realizamos la herencia
//Esto es una forma de hacer herencia en JavaScript Antiguo
//Pokemon.prototype = Object.create(Entidad.prototype);
//Pokemon.prototype.constructor = Pokemon;


//Esta es la forma de hacer herencia en JavaScript Moderno
Object.setPrototypeOf(Pikachu.prototype, Entidad.prototype);
Object.setPrototypeOf(Charmander.prototype, Entidad.prototype);

const pikachu = new Pikachu();
console.log(pikachu);

const charmander = new Charmander();
console.log(charmander);
