const input = require('fs').readFileSync('./stdin', 'utf8');
const lines = input.split('\n');

let Salary = parseFloat(lines.shift());
let Sales = parseFloat(lines.shift());
let Monthly = (Sales * 0.15) + Salary;

console.log(`TOTAL = R$ ${Monthly.toFixed(2)}`)
