//Que es el polimorfismo
//El polimorfismo es la capacidad de un objeto de comportarse de muchas formas diferentes.
//En JavaScript, el polimorfismo es la capacidad de un objeto de comportarse de muchas formas diferentes.
//Los objetos pueden ser polimórficos cuando pueden compartir métodos con otros objetos o clases.
//El polimorfismo es una característica de la programación orientada a objetos.

//Ejemplo de polimorfismo
//En el siguiente ejemplo, tenemos una clase Animal que tiene un método llamado sonido().
//La clase Perro y la clase Gato heredan de la clase Animal y anulan el método sonido().
//Cuando llamamos al método sonido() en un objeto de la clase Perro, se ejecuta el método sonido() de la clase Perro.
//Cuando llamamos al método sonido() en un objeto de la clase Gato, se ejecuta el método sonido() de la clase Gato.

class Animal {
    sound() {
        console.log("Animal makes a sound");
    }
}

class Dog extends Animal {
    sound() {
        console.log("Dog barks");
    }
}

class Cat extends Animal {
    sound() {
        console.log("Cat meows");
    }
}

const animal = new Animal();
const dog = new Dog();
const cat = new Cat();

animal.sound(); // Output: Animal makes a sound
dog.sound(); // Output: Dog barks
cat.sound(); // Output: Cat meows