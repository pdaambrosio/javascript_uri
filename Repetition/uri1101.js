const input = require('fs').readFileSync('./JavaScript-Uri/Repetition/stdin', 'utf8');
const values = input.split(/\s+/).map(value => parseInt(value));

for (let i = 0; i < values.length; i++) {
    let numbers = [];
    numbers.push(values.shift(i), values.shift(i + 1));
    let minNumber = Math.min(...numbers);
    let maxNumber = Math.max(...numbers) + 1;
    if (minNumber > 0 && maxNumber > 0) {
        let rangeNumbers = [...Array(maxNumber - minNumber).keys()].map(i => i + minNumber);
        console.log(...rangeNumbers, `Sum=${rangeNumbers.reduce((a, b) => a + b)}`);
    }
}
