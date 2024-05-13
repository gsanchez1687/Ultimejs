//Metodos estaticos
//que son los metodos estaticos
//Los métodos estáticos son métodos que se pueden llamar en la clase sin tener que instanciar la clase. Los métodos estáticos se definen utilizando la palabra clave static.
//ventajas de los metodos estaticos:
//1. No es necesario instanciar la clase para llamar a un método estático.
//2. Los métodos estáticos son útiles para crear funciones de utilidad.
//3. Los métodos estáticos son útiles para crear métodos de fábrica.
//4. Los métodos estáticos son útiles para crear métodos de ayuda.
//5. Los métodos estáticos son útiles para crear métodos de validación.
//6. Los métodos estáticos son útiles para crear métodos de conversión.
//7. Los métodos estáticos son útiles para crear métodos de comparación.
//8. Los métodos estáticos son útiles para crear métodos de clonación.
//9. Los métodos estáticos son útiles para crear métodos de copia profunda.
//10. Los métodos estáticos son útiles para crear métodos de copia superficial.
//11. Los métodos estáticos son útiles para crear métodos de serialización.
//12. Los métodos estáticos son útiles para crear métodos de deserialización.
//13. Los métodos estáticos son útiles para crear métodos de conversión de tipo.
//14. Los métodos estáticos son útiles para crear métodos de comparación de tipo.
//15. Los métodos estáticos son útiles para crear métodos de validación de tipo.
//16. Los métodos estáticos son útiles para crear métodos de conversión de tipo.
class Restaurante{
    constructor(nombre, ubicacion){
        this.id = Math.floor(Math.random() * 1000);
        this.nombre = nombre;
        this.ubicacion = ubicacion;
    }
    //Metodo estatico
    static bienvenida(){
        return 'Bienvenidos a nuestro restaurante';
    }
    static getRestaurante(id){
        return new Restaurante('El pollo loco', 'Av. Siempre viva 123');
    }
}

const restaurante = Restaurante.getRestaurante(1);
console.log(restaurante);