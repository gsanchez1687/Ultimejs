//Getter y Setter
//que son los getter y setter
//Los métodos de acceso se utilizan para obtener y establecer los valores de las propiedades de un objeto.
//Los métodos de acceso se definen utilizando las palabras clave get y set.
class Restaurante{

    constructor(nombre, ubicacion){
        this.id = Math.floor(Math.random() * 1000);
        this.nombre = nombre;
        this.ubicacion = ubicacion;
    }

    get informacion(){  
        return `El restaurante ${this.nombre} se encuentra en ${this.ubicacion}`;
    }

    set informacion(nuevaInformacion){
        const arreglo = nuevaInformacion.split(' ');
        this.nombre = arreglo[0];
        this.ubicacion = arreglo[1];
    }
}

const getrestaurante = new Restaurante('El pollo loco', 'Av. Siempre viva 123');
const setrestaurante = new Restaurante('El Guille', 'Carrera 80 #10a-35');

console.log(getrestaurante.informacion);
console.log(setrestaurante.informacion);