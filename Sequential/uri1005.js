const input = require('fs').readFileSync('./stdin', 'utf8');
const lines = input.split('\n');

let A = parseFloat(lines.shift());
let B = parseFloat(lines.shift());

let AVERAGE = (A * 3.5 + B * 7.5) / 11;

console.log(`MEDIA = ${AVERAGE.toFixed(5)}`);