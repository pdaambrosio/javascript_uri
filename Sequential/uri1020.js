const input = require('fs').readFileSync('./stdin', 'utf8');

let valor = parseInt(input);

let anos = parseInt(valor / 365);
valor = valor % 365;
let meses = parseInt(valor / 30);
valor = valor % 30;
let dias = valor;


console.log(`${anos} ano(s)`);
console.log(`${meses} mes(es)`);
console.log(`${dias} dia(s)`);