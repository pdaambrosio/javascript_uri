const input = require('fs').readFileSync('./JavaScript-Uri/Repetition/stdin', 'utf8');
const values = input.split('\n').map(value => parseInt(value));
const maxValue = Math.max(...values);

console.log(maxValue);
console.log(values.indexOf(maxValue) + 1);
