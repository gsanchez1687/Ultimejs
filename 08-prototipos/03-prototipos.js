//Prototipos
// Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Adding a method to the prototype
Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

Person.prototype.save = function() {
 console.log(`Saving ${this.name} to the database`);
 console.log(`Cerrando la conexion a la base de datos`);
}

// Creating an instance of Person
const john = new Person("John", 30);

// Calling the greet method
john.greet();

//Mas Ejemplos
const Guille = new Person("Guille", 30);
Guille.greet();
Guille.save();