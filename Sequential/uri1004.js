const input = require('fs').readFileSync('./stdin', 'utf8');
const lines = input.split('\n');

let A = parseInt(lines.shift());
let B = parseInt(lines.shift());

let PROD = A * B;

console.log(`PROD = ${PROD}`);