//contructor

function Persona(nombre, apellido, edad, altura, peso) {
    this.id = 1;
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.altura = altura;
    this.peso = peso;
    this.recuperarClave = function() { //metodo
        console.log("Recuperando clave");
    }
}

let usuario = new Persona("Juan", "Perez", 30, 1.80, 80);
console.log(usuario);
