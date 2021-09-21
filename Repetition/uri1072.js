const input = require('fs').readFileSync('./JavaScript-Uri/Repetition/stdin', 'utf8');
const numbers = input.split('\n').map(value => parseInt(value));
const loop = numbers.shift();

let numIn = 0;
let numOut = 0;

for (let i of Array(loop).keys()) {
    if (numbers[i] >= 10 && numbers[i] <= 20) {
        numIn += 1;
    } else {
        numOut += 1;
    }
}

console.log(`${numIn} in`);
console.log(`${numOut} out`);
