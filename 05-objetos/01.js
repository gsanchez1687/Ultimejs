let email = 'gsanchez1687@gmail.com';
let name = 'Guillermo Enrique';
let direccion = {
    calle: 'Calle 123',
    numero: 123,
    departamento: 'A',
    ciudad: 'Bogota'
};


let user = {
    email: 'gsanchez1687@gmail.com',
    name: 'Guillermo Enrique',
    direccion: {
        calle: 'Calle 123',
        numero: 123,
        departamento: 'A',
        ciudad: 'Bogota'
    },
    activo: true,
    recuperarClave: function() {
        console.log('Recuperando clave');
    }
}

console.log(user);