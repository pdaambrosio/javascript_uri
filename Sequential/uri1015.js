const input = require('fs').readFileSync('./stdin', 'utf8');
const [l1, l2] = input.split('\n');
const [x1, y1] = l1.split(' ').map(num => parseFloat(num));
const [x2, y2] = l2.split(' ').map(num => parseFloat(num));

let distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

console.log(distancia.toFixed(4));