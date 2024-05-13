//Extender los prototipos de funciones construcctoras que ya existan dentro de nuestro sistema
//ejemplo
Object.prototype.log = function(){
    console.log('este es mi objeto log personalizado');
}


//consejo: no modificar los prototipos de objetos que no hayamos creado nosotros
console.log(log());