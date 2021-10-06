const input = require('fs').readFileSync('./JavaScript-Uri/Repetition/stdin', 'utf8');
const values = input.split('\n').map(value => parseInt(value));
const X = Math.min(...values);
const Y = Math.max(...values);

let sum = 0;

for (let value = X; value <= Y; value++) {
    if (value % 13 !== 0) {
        sum += value;
    }
}

console.log(sum);
