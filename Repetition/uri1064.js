const input = require('fs').readFileSync('./JavaScript-Uri/Repetition/stdin', 'utf8');
const floatNumbers = input.split('\n').map(value => parseFloat(value));

const positiveNumbers = [];

for (let positive of floatNumbers) {
    if (positive > 0) {
        positiveNumbers.push(positive);
    }
}

const average = positiveNumbers.reduce((a, b) => a + b) / positiveNumbers.length;

console.log(`${positiveNumbers.length} valores positivos`);
console.log(average.toFixed(1));
