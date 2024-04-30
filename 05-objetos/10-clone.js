let copia1 = {
    x: 10,
    y: 25
};

let copia2 = Object.assign({}, copia1,{z:20}); // { x: 10, y: 25 }

console.log(copia1,copia2); // { x: 10, y: 25 }


//copia exacta de un objeto
let copia3 = Object.assign({}, copia1); // { x: 10, y: 25 }
console.log(copia3); // { x: 10, y: 25 }


//forma mas actualizada de clonar objeto
let copia4 = {...copia1}; // { x: 10, y: 25 }
console.log(copia4); // { x: 10, y: 25 }


//forma antigua de clonar objeto
let copia5 = JSON.parse(JSON.stringify(copia1)); // { x: 10, y: 25 }
console.log(copia5); // { x: 10, y: 25 }

//segunda forma antigua de clonar objeto
let copia6 = {};
for(let llave in copia1){
    copia6[llave] = copia1[llave];
}
console.log(copia6); // { x: 10, y: 25 }