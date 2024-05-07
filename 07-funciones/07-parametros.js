//Parametros
//crear un objeto con url, bucket y port


//objeto
const configuracion = {
    url: 'https://aws.amazon.com/es/',
    bucket: 'aws',
    port: 8080
}
//forma antigua
//function congifuracionAPI1 (url) {
//    const defaultURL = url ? url : 'https://aws.amazon.com/es/'
//    return `${defaultURL}`
//}
//forma moderna
function congifuracionAPI2 (url, bucket, port) {
    return `${url}/${bucket}/${port}`;
}

console.log(congifuracionAPI2('https://aws.amazon.com/es', '145', 8080));