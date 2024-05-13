//Constructor padre

function Pokemon(entidad){
    this.id = Math.random().toString(36).substr(2, 9);
    this.entrenador = 'Ash';
    this.entidad = entidad;
}

function User(){
    Pokemon.call(this, 'Pikachu');
    this.attrs = {
        vida: 100,
        ataque: 55,
        defensa: 30
    }
}

const pikachu = new User();
console.log(pikachu);