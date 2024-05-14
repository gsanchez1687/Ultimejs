//Api rest
//que es una api rest
//es un conjunto de reglas y convenciones para crear servicios web
//que se comunican con http
//se basa en el protocolo http

//El metodo GET es el valor por defecto de fetch
fetch('https://jsonplaceholder.typicode.com/todos', { method: 'POST', body: JSON.stringify({ title:'Hola mundo' }), headers:{ 'Content-Type':'application/json', Autorization:'apikey' }, mode:'cors', cache:'no-cache' })
.then( responde =>{
    if(responde.ok){
        return responde.json();
    }else{
        return Promise.reject(responde.status + ' ' + responde.statusText);
    }
}).then(data =>{
    console.log(data);
}).catch(error =>{
    console.log('Fetch error:', error);
});