const input = require('fs').readFileSync('./stdin', 'utf8');
const lines = input.split('\n');

let peca1 = lines.shift().split(" ");
let peca2 = lines.shift().split(" ");
let totalPeca1 = peca1[1] * parseFloat(peca1[2]);
let totalPeca2 = peca2[1] * parseFloat(peca2[2]);
let total = totalPeca1 + totalPeca2;

console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`);