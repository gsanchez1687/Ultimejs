//Que son las clases en JavaScript
//Las clases son una forma de definir un objeto en JavaScript, es una plantilla para crear objetos, es un molde para crear objetos.
//Ejemplo de una clase
class Persona {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
    //este metodo es del prototipo
    login(){
        return `${this.nombre} ha iniciado sesión`;
    }
    //este metodo es del prototipo
    logout(){
        return `${this.nombre} ha cerrado sesión`;
    }
    //esta forma el metodo no es del prototipo sino a nivel de instancia
    agregar = () =>{
        return `${this.nombre} ha sido agregado`;
    }
}


const persona1 = new Persona('Juan', 'Perez');
console.log(persona1);
console.log(persona1.login());
console.log(persona1.agregar());
console.log(persona1.logout());