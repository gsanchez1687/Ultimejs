//para que me sirve abortar un fetch
//para cancelar una peticion fetch

let controller = new AbortController();
let { signal } = controller;

async function getTodos(){
    const url = 'https://jsonplaceholder.typicode.com/todos';
    try{
        const responde = await fetch(url, { signal });
        const data = await responde.json();
        console.log(data);
    }catch(error){
        console.log('Fetch error:', error);
    }
}

getTodos();
controller.abort();