function getNumerosImpares($hasta){

    let resultado = [];
    for(let i = 1; i <= $hasta; i++){
        if(i % 2 != 0){
            resultado.push(i);
        }
    }
    return resultado;

}

let salida = getNumerosImpares(10);
console.log(salida); //[1,3,5,7,9]