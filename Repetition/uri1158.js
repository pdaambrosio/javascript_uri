const input = require('fs').readFileSync('./JavaScript-Uri/Repetition/stdin', 'utf8');
const values = input.split(/\s+/).map(value => parseInt(value));
const N = parseInt(values.shift());

for (let i = 0; i < N; i++) {
    let sumOdd = 0;
    const [X, Y] = values.splice(0, 2);
    for (let number = X; number < X + (Y * 2); number++) {
        if (number % 2 !== 0) {
            sumOdd += number;
        }
    }
    console.log(sumOdd);
}
