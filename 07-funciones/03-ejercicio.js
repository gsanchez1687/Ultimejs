function callback(fn,...rest){
    fn(...rest);
}

function log(...arguments){
    console.log(arguments);
}

callback(log,1,2,3,4,5,6,7,8,9,10);