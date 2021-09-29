const input = require('fs').readFileSync('./JavaScript-Uri/Repetition/stdin', 'utf8');
const values = input.split(/\s+/).map(value => parseInt(value));
const loop = values.shift();

for (let i = 0; i < loop; i++) {
    let sumOdd = 0;
    let numbers = values.splice(0, 2);
    for (let num = Math.min(...numbers) + 1; num < Math.max(...numbers); num++) {
        if (num % 2 !== 0) {
            sumOdd += num;
        }
    }
    console.log(sumOdd);
}
