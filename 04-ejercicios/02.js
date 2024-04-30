//Resolucion

//nombre ancho y alto
//8k 7680 x 4320
//4k 3840 x 2160
//WQHD 2560 x 1440
//FHD 1920 x 1080
//HD 1280 x 720

function nombreResolucion(ancho,alto){

    if(ancho >= 7680 && alto >= 4320){
        console.log("8k");
    }else if(ancho >= 3840 && alto >= 2160){
        console.log("4k");
    }else if(ancho >= 2560 && alto >= 1440){
        console.log("WQHD");
    }else if(ancho >= 1920 && alto >= 1080){
        console.log("FHD");
    }else if(ancho >= 1280 && alto >= 720){
        console.log("HD");
    }else{
        console.log("Otra resolucion");
    }

}

let salida = nombreResolucion(7680,5000);