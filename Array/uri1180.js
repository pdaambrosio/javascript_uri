// const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const input = require('fs').readFileSync('./JavaScript-Uri/Array/stdin', 'utf8');
const values = input.split(/\s+/).map(value => parseInt(value));
const N = values.shift();
const xArray = values.slice(0, N);

console.log(`Menor valor: ${Math.min(...xArray)}`);
console.log(`Posicao: ${xArray.indexOf(Math.min(...xArray))}`);
