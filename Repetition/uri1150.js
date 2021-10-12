const input = require('fs').readFileSync('./JavaScript-Uri/Repetition/stdin', 'utf8');
const values = input.split('\n').map(value => parseInt(value));
const X = values.shift();
const Z = values.filter(value => value > X).shift();

let sum = X;
let count = 1;

while (sum <= Z) {
    sum += X + count;
    count += 1;
}

console.log(count);
