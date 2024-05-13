//Iterar todas las propiedades de un objeto y tambien su prototipo
function Persona() {
    this.nombre = 'Juan',
    this.edad = 80,
    this.profesion = 'Programador'
}

Persona.prototype.login = function(){
    console.log('Iniciar sesion');
}

const modelPersona = new Persona();
//modelPersona.login(); //Iniciar sesion


//aqui iteramos las propiedades del objeto
for(let prop in modelPersona){
    if(modelPersona.hasOwnProperty(prop)){
        console.log(prop);
    }
}