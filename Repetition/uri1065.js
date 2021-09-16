const input = require('fs').readFileSync('./JavaScript-Uri/Repetition/stdin', 'utf8');
const numbers = input.split('\n').map(value => parseInt(value));

let evenNumbers = 0;

for (let number of numbers) {
    if (number % 2 === 0) {
        evenNumbers += 1;
    }
}

console.log(`${evenNumbers} valores pares`);
