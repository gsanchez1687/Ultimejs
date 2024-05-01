//crear objeto de fecha
const ahora = new Date();
console.log(ahora); // 2021-08-17T22:00:00.000Z


const fecha  = new Date();
console.log(fecha); // 2021-08-17T05:00:00.000Z


console.log('toDateString: '+fecha.toDateString()); // Tue Aug 17 2021
//este es el formato correcto para enviar fechas al servidor
console.log('toISOString: '+fecha.toISOString()); // 2021-08-17T05:00:00.000Z

console.log('toTimeString: '+fecha.toTimeString()); // 05:00:00 GMT-0500 (hora de verano central)

console.log('getDate: '+fecha.getDate());// 17
console.log('getDay: '+fecha.getDay());// 2
console.log('getMonth: '+fecha.getMonth());// 7
console.log('getFullYear: '+fecha.getFullYear());// 2021
console.log('getHours: '+fecha.getHours());// 0
console.log('getMinutes: '+fecha.getMinutes());// 0
console.log('getSeconds: '+fecha.getSeconds());// 0
console.log('getMilliseconds: '+fecha.getMilliseconds());// 0
console.log('getTime: '+fecha.getTime());// 1629204000000
console.log('getTimezoneOffset: '+fecha.getTimezoneOffset());// 300
console.log('getUTCDate: '+fecha.getUTCDate());// 17
console.log('getUTCDay: '+fecha.getUTCDay());// 2
console.log('getUTCMonth: '+fecha.getUTCMonth());// 7
console.log('getUTCFullYear: '+fecha.getUTCFullYear());// 2021
console.log('getUTCHours: '+fecha.getUTCHours());// 5
console.log('getUTCMinutes: '+fecha.getUTCMinutes());// 0
console.log('getUTCSeconds: '+fecha.getUTCSeconds());// 0
console.log('getUTCMilliseconds: '+fecha.getUTCMilliseconds());// 0
console.log('setDate: '+fecha.setDate(15));// 1628968800000
console.log('setFullYear: '+fecha.setFullYear(2022));// 1671119200000
console.log('setHours: '+fecha.setHours(15));// 1671162000000
console.log('setMilliseconds: '+fecha.setMilliseconds(500));// 1671162500000
console.log('setMinutes: '+fecha.setMinutes(30));// 1671163800000
console.log('setMonth: '+fecha.setMonth(11));// 1678843800000
console.log('setSeconds: '+fecha.setSeconds(45));// 1678845450000
console.log('setTime: '+fecha.setTime(1678845450000));// 1678845450000
console.log('setUTCDate: '+fecha.setUTCDate(15));// 1678845450000
console.log('setUTCFullYear: '+fecha.setUTCFullYear(2022));// 1671119200000
console.log('setUTCHours: '+fecha.setUTCHours(15));// 1671162000000
console.log('setUTCMilliseconds: '+fecha.setUTCMilliseconds(500));// 1671162500000
console.log('setUTCMinutes: '+fecha.setUTCMinutes(30));// 1671163800000
console.log('setUTCMonth: '+fecha.setUTCMonth(11));// 1678843800000
console.log('setUTCSeconds: '+fecha.setUTCSeconds(45));// 1678845450000
console.log('toDateString: '+fecha.toDateString());// Tue Dec 15 2022
console.log('toISOString: '+fecha.toISOString());// 2022-12-15T21:30:45.000Z
console.log('toJSON: '+fecha.toJSON());// 2022-12-15T21:30:45.000Z
console.log('toLocaleDateString: '+fecha.toLocaleDateString());// 12/15/2022
console.log('toLocaleTimeString: '+fecha.toLocaleTimeString());// 9:30:45 PM
console.log('toLocaleString: '+fecha.toLocaleString());// 12/15/2022, 9:30:45 PM
console.log('toString: '+fecha.toString());// Thu Dec 15 2022 15:30:45 GMT-0600 (hora estándar central)
console.log('toTimeString: '+fecha.toTimeString());// 15:30:45 GMT-0600 (hora estándar central)
console.log('toUTCString: '+fecha.toUTCString());// Fri, 16 Dec 2022 03:30:45 GMT
console.log('UTC: '+fecha.UTC());// 1678845450000
console