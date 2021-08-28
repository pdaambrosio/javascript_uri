const input = require('fs').readFileSync('./stdin', 'utf8');
const A = input.split('\n').map(num => parseInt(num));

let tempo = (60 * input) / 30;

console.log(`${tempo} minutos`)