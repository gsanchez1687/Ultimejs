//Getters y Setters
const persona = {
    nombre: 'Guillermo',
    apellido: 'Enrique',
    get nombreCompleto() {
        return `${this.nombre} ${this.apellido}`;
    },
    set nombreCompleto(value) {
        const [nombre, apellido] = value.split(' ');
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
persona.nombreCompleto = 'Guillermo Sanchez';
console.log(persona.nombreCompleto);