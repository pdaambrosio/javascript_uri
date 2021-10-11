const input = require('fs').readFileSync('./JavaScript-Uri/Repetition/stdin', 'utf8');
const values = input.split(' ').map(value => parseInt(value));

const A = values.shift();
const N = values.filter(value => value > 0).shift();

let total = 0;
for (let i = 0; i < N; i++) {
    total += A + i;
}

console.log(total);
