const input = require('fs').readFileSync('./stdin', 'utf8');
const lines = input.split('\n');

let A = parseInt(lines.shift());
let B = parseInt(lines.shift());
let C = parseFloat(lines.shift());

let SALARY = B * C;

console.log(`NUMBER = ${A}`)
console.log(`SALARY = U$ ${SALARY.toFixed(2)}`);