const input = require('fs').readFileSync('./JavaScript-Uri/Repetition/stdin', 'utf8');
const [number1, number2] = input.split('\n').map(value => parseInt(value));

let sumOddNumbers = 0;

for (let num = (Math.min(number1, number2) + 1); num < Math.max(number1, number2); num++) {
    if (num % 2 !== 0) {
        sumOddNumbers += num;
    }
}

console.log(sumOddNumbers);
