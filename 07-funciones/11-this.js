//this
//Dentro de un objeto: this hace referencia a un objeto
//Dentro de una funcion: this hace referencia al objeto window y global
//Si se usa new hace referencia a un nuevo objeto, objeto que sera creado

const persona = {
    name: 'Juan',
    login(){
        console.log(this);
    }
}

persona.login();