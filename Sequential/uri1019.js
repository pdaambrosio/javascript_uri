const input = require('fs').readFileSync('./stdin', 'utf8');
const valor = parseInt(input);

let horas = parseInt(valor / 3600);
let minutos = parseInt((valor % 3600) / 60);
let segundos = parseInt(valor % 60);

console.log(`${horas}:${minutos}:${segundos}`);