//parametros destructurados
const configuracion = {
    url: 'https://aws.amazon.com/es/',
    bucket: 'aws',
    port: 8080,
    direccion: {
        calle: 'calle falsa',
        numero: 123
    }
}
function webserver(url, ...rest){
console.log(rest);
  return {url};
}

console.log(webserver(configuracion,'loqueea')); //Servidor en https://aws.amazon.com/es/