//Mixins
//Son una forma de reutilizar código en JS, es una técnica que permite a un objeto heredar métodos de otros objetos.
function mixins(target, ...sources){ //spread operator
    Object.assign(target.prototype, ...sources);
}

let volar = {
    vuela: function(){
        console.log('Volando...');
    }
}

let nadar = {
    nada: function(){
        console.log('Nadando...');
    }
}

let baño ={
    vaAlBaño: function(){
        console.log('Va al baño..');
    }
}

let caminar = {
    camina: function(){
        console.log('Caminando..');
    }
}

//Vuela, nada, camina
function Pato(){}
mixins(Pato, volar, nadar, caminar);
const pato = new Pato();
console.log(pato);
//Camina, nada, va al baño
function Perro(){}
mixins(Perro, nadar, baño, caminar);
const perro = new Perro();
console.log(perro);

//nada, va al baño
function Pez(){}
mixins(Pez, nadar, baño);
const pez = new Pez();
console.log(pez);

//Vuela pero no nada, camina pero no va al baño
function Avion(){}
mixins(Avion, volar);
const avion = new Avion();
console.log(avion);