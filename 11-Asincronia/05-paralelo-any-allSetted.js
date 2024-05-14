//Resolviendo promesas en paralelo
const p1 = Promise.resolve(3);
const p2 = fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json());
const p3 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());
const p4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'foo');
});

//Metodo estatico Promise
Promise.all([p1, p2, p3, p4]).then(values => {
    console.log('All: ',values); // [3, 42, 'foo']
}).catch(err => console.error('Error en all: ',err));

//Metodo estatico Promise
//espera que solo resuelva la primera promesa
//para que se utiliza race ?
    //Para saber cual de las promesas se resuelve primero
//Tiene algun uso en la visa real ?
    //Si, por ejemplo, si se tiene un formulario y se necesita validar un campo
Promise.race([p1, p2, p3, p4]).then(values => {
    console.log('Race: ',values); // 3
}).catch(err => console.error('Error ',err));


//Any espera que al menos una promesa se resuelva
Promise.any([p1, p2, p3, p4]).then(values => {
    console.log('Any: ',values); // 3
}).catch(err => console.error('Todas las promesos fueron rechazadas ',err));

//AllSettled espera que todas las promesas se resuelvan
Promise.allSettled([p1, p2, p3, p4]).then(values => {
    console.log('AllSettled: ',values); // 3
}).catch(err => console.error('Error en allSettled: ',err));