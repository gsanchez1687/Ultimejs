let login = user => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`Bienvenido ${user}`);
    }, 1000);
});

login('Guillermo').then(user => console.log(user));