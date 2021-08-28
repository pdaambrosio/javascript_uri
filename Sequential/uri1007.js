const input = require('fs').readFileSync('./stdin', 'utf8');
const lines = input.split('\n');

let A = parseInt(lines.shift());
let B = parseInt(lines.shift());
let C = parseInt(lines.shift());
let D = parseInt(lines.shift());

let DIFFERENCE = (A * B - C * D);

console.log(`DIFERENCA = ${DIFFERENCE}`)