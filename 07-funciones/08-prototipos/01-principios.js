//Encapsulacion
const usuario = {
    nombre: 'Juan',
    edad: 30,
    imprimir() {
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}`);
    },
    save() {
        console.log('Usuario guardado');
    }
};

console.log(usuario.imprimir());

//Abstaccion
function usuario2(nombre, edad, imprimir, save){
    this.nombre = '';
    this.edad = 0;
    this.imprimir = this.imprimir;
    this.save = function(){
        console.log('Usuario guardado');
    };
}
const usuario3 = new usuario2();
usuario3.nombre = 'Carlos';
usuario3.edad = 40;
usuario3.save();
console.log(usuario3);


//Poloformismo