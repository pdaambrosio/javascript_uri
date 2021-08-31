const input = require('fs').readFileSync('./stdin', 'utf8');

let tempo = (60 * input) / 30;

console.log(`${tempo} minutos`)