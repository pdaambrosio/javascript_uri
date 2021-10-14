const input = require('fs').readFileSync('./JavaScript-Uri/Repetition/stdin', 'utf8');
const N = parseInt(input);

const factorial = num => (num < 1) ? 1 : factorial(num - 1) * num;

console.log(factorial(N));
