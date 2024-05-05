//groupBy
const usuarios = [
    {edad: 15, nombre: 'Juan', plan: 'premium'},
    {edad: 23, nombre: 'Pepe', plan: 'gratuito'},
    {edad: 16, nombre: 'Rosa', plan: 'premium'},
    {edad: 23, nombre: 'Luis', plan: 'gratuito'},
    {edad: 25, nombre: 'Ana', plan: 'premium'},
    {edad: 18, nombre: 'Lucas', plan: 'premium'},
    {edad: 28, nombre: 'Maria', plan: 'gratuito'},
    {edad: 22, nombre: 'Luisa', plan: 'premium'},
    {edad: 24, nombre: 'Jose', plan: 'gratuito'},
    {edad: 14, nombre: 'Andrea', plan: 'premium'},
];

function getGroupBy(array, prop){
    return array.reduce((acumulador, item) => {
        const key = item[prop];
        if(!acumulador[key]){
            acumulador[key] = [];
        }
        acumulador[key].push(item);
        return acumulador;
    }, {});
}

const groupByPlan = getGroupBy(usuarios, 'plan');
console.log({groupByPlan});