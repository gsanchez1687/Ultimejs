
class User{
   static _url = 'https://jsonplaceholder.typicode.com/users';
   static _users = [];

   static async getAll(){
    try{
       const response = await fetch(this._url)
       if(!response.ok) throw response;
       this._users = await response.json();
       return this._users;
    }catch(error){
      console.log('Fetch error:', error);
    }
   }
}
 
async function main(){
    const users = await User.getAll();
    console.log(users);
}

main();

