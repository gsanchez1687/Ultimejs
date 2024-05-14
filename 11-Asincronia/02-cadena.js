//Encadenar promesas
let promesa1 = new Promise((res, rej) =>{
    res(10);
});

let promesa2 = new Promise((res, rej) =>{
    res(20);
});

promesa1.then( valor => {
   
        return promesa2;
   
}).then(valor2 => {
   return valor2;
}).catch(e =>{
    console.log('Catch de la promesa 2: '+e);
}).finally( () =>{
    console.log('Finally');
} );