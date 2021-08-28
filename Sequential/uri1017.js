const input = require('fs').readFileSync('./stdin', 'utf8');
const [hora, velocidade] = input.split('\n').map(i => parseInt(i));

let distanciaTotal = hora * velocidade;
let combustivel = distanciaTotal / 12;

console.log(combustivel.toFixed(3));