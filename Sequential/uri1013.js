const input = require('fs').readFileSync('./stdin', 'utf8');
const [A, B, C] = input.split(' ').map(num => parseInt(num));

let maiorAB = (A + B + Math.abs(A -B)) / 2;
let maiorC = (C + maiorAB + Math.abs(C - maiorAB)) /2;

console.log(`${maiorC} eh o maior`)