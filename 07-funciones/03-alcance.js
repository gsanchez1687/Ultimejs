//El alcance de las variables dentro de las funciones
let variableGlobal = 'variable global';
function alcance() {
    function saludo(){}
    variableGlobal = 'variable global modificada';
    var variableVar = 'variable desde var';
    let variableLet = 'Saludos desde el let';
    const variableConst = 'saludos desde el const';
    console.log(saludo);
    console.log(variableVar);
    console.log(variableLet);
    console.log(variableConst);
}

console.log(variableGlobal);
alcance();
console.log(variableGlobal);