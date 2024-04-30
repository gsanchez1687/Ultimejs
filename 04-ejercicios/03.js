function getbyIdx(arr, idx){

    if(idx < 0 || idx >= arr.length){
        return null;
    }
    return arr[idx];

}

let salida = getbyIdx([1,2,3,4,5], 2);
console.log(salida); //3