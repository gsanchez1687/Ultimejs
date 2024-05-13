function Entidad(){

}

function getProto(u){
   return Object.getPrototypeOf(u);
}

Entidad.prototype.saludar = function(){
    console.log(`Hola, soy ${this.nombre}`);
}

//Metodo Override
Entidad.prototype.save = function(){
    console.log(`Guardando desde entidad`);

}

function Pikachu(){
    this.id = Math.random().toString(36).substr(2, 9);
    this.altura = '0,4m';
    this.peso = '6,0kg';
    this.sexo = 'Desconocido';
    this.categoria = 'Raton';
    this.habilidad = 'Electricidad Estatica';
    this.tipo = 'Electrico';
    this.debilidad = 'Tierra';
}

Pikachu.prototype.save = function(){
    console.log(`Guardando desde Pikachu`);
}

function Charmander(){
    this.id = Math.random().toString(36).substr(2, 9);
    this.altura = '0,6m';
    this.peso = '8,5kg';
    this.sexo = 'Desconocido';
    this.categoria = 'Lagartija';
    this.habilidad = 'Mar Llamas';
    this.tipo = 'Fuego';
    this.debilidad = 'Agua, Tierra, Roca';
}

function Mewtwo(){
    this.id = Math.random().toString(36).substr(2, 9);
    this.altura = '2,0m';
    this.peso = '122kg';
    this.sexo = 'Desconocido';
    this.categoria = 'Genetico';
    this.habilidad = 'Presion';
    this.tipo = 'Psiquico';
    this.debilidad = 'Fantasma, Bicho, Siniestro';

}

Object.setPrototypeOf(Pikachu.prototype, Entidad.prototype);

const pikachu = new Pikachu();

console.log( getProto(getProto(pikachu)).save() );