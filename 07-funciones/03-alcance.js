//El alcance de las variables dentro de las funciones
function alcance() {
    function saludo(){}
    var variableVar = 'variable desde var';
    let variableLet = 'Saludos desde el let';
    const variableConst = 'saludos desde el const';
    console.log(saludo);
    console.log(variableVar);
    console.log(variableLet);
    console.log(variableConst);
}

alcance();