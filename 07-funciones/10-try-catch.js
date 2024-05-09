//try catch
function sumaTodo(arr){
    if(!Array.isArray(arr)){
        throw new Error('El argumento debe ser un array'); 
    }
    return arr.reduce((acc, el) => acc + el, 0);
}

//console.log(sumaTodo([1,2,3,4,5]));
try {
    const salida = sumaTodo([1,2,3,4,5]);
    console.log(salida);
    swal({
        title: salida,
        text: "You clicked the button!",
        icon: "success",
        button: "Aww yiss!",
      });
}catch(error){
    swal(error.message, "error");
    swal({
        title: error.message,
        text: "You clicked the button!",
        icon: "error",
        button: "Aww yiss!",
      });
}

console.log('Esto se ejecuta de todos modos');