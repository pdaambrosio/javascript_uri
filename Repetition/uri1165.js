const input = require('fs').readFileSync('./JavaScript-Uri/Repetition/stdin', 'utf8');
const values = input.split('\n').map(value => parseInt(value));
const loop = values.shift();

for (let i = 0; i < loop; i++) {
    const X = values.shift();
    const numbers = [];
    for (let n = 1; n < X + 1; n++) {
        if (X % n === 0) {
            numbers.push(n);
        }
    }
    const isPrime = arrayNumbers => (arrayNumbers.length === 2) ? `${X} eh primo` : `${X} nao eh primo`;
    console.log(isPrime(numbers));
}
