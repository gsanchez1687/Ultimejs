//mixins
class Entidad{

    constuctor(id){
        this.id = id;
       this.created_at = new Date();
    }

    save(){
        console.log('Guardando la entidad');
    }
}

class Restaurante extends Entidad {
    constructor(nombre, ubicacion){
        super(1);
        this.nombre = nombre;
        this.ubicacion = ubicacion;
    }
    save(){
        console.log('Guardando el restaurante de la clase Restaurante');
    
    }
}

const restaurante = new Restaurante('El pollo loco2', 'Av. Siempre viva 12322');
console.log(restaurante.save());