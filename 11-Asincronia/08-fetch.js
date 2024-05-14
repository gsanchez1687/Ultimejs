//Fetch
//que es fetch? es una funcion que nos permite hacer peticiones http desde javascript
//fetch nos permite hacer peticiones http de una manera mas facil y limpia
//dame un caso real de fetch
//fetch se usa mucho para hacer peticiones a apis de terceros

fetch('https://jsonplaceholder.typicode.com/todos/a')
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