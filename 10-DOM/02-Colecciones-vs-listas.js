//Collection vs List
let collection = document.getElementsByTagName('p');
let list = document.querySelectorAll('p');
//console.log(collection,list);

let item1 = collection.namedItem('Guillermo');
console.log(item1);


let item2 = collection.item(2);
console.log(item2);


let item3 = collection[2];
console.log(item3);


//iterar elememtos de una coleccion
for (let i = 0; i < collection.length; i++) {
    console.log(collection[i]);
}


[...collection].forEach(element => console.log(element) );
