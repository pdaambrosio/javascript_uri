const input = require('fs').readFileSync('./JavaScript-Uri/Repetition/stdin', 'utf8');
const [X, Y] = input.split(' ').map(value => parseInt(value));

let numbers = [];
for (let i = 1; i <= Y; i++) {
    numbers.push(i);
    if (numbers.length === X) {
        console.log(numbers.join(' '));
        numbers = [];
    }
}
