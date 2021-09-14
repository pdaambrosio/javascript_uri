const input = require('fs').readFileSync('./JavaScript-Uri/Repetition/stdin', 'utf8');
const numbers = input.split('\n').map(number => parseFloat(number));

let positiveNumbers = 0;

for (let i of numbers) {
    if (i >= 0) {
        positiveNumbers += 1;
    }
}

console.log(`${positiveNumbers} valores positivos`);
