const input = require('fs').readFileSync('./stdin', 'utf8');
const lines = input.split('\n');

let Pi = 3.14159;
let A = parseFloat(lines.shift());
let area = Pi * (Math.pow(A, 2));
//or
//let area = Pi * (A * A);

console.log(`A=${area.toFixed(4)}`);