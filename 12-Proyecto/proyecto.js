class User{
    static #url = 'https://jsonplaceholder.typicode.com/users';
    static #users = [];
    static #elementUl = '';
    static async getAll(){
        
        try{
            let res = await fetch(this.#url);
             if(!res.ok) throw res;
             this.#users = await res.json();
             return this.#users;
        }catch(err){
            console.log(err);
        }
    }
    static renderUser(user){
       return `<li>${user.name}</li>`
    }
    static async render(){
        this.#elementUl = document.createElement('ul');
        let users = await this.getAll();
        users.forEach(u => this.#elementUl.appendChild(this.renderUser(u)));
    }
}
//para que se utiliza async y await ?
//respuesta: para que la funcion se ejecute de manera asincrona y no se bloquee el hilo principal
//que significa que una funcion sea asincrona ?
//respuesta: que la funcion se ejecuta en segundo plano y no bloquea el hilo principal
//que pasa si npo utilizamos async y await en la funcion getAll() ?
//respuesta: la funcion se ejecuta de manera sincrona y bloquea el hilo principal
async function main(){

    const user = await User.getAll();
    User.render();
    console.log(user);

}

main();