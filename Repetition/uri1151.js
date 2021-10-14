const input = require('fs').readFileSync('./JavaScript-Uri/Repetition/stdin', 'utf8');
const N = parseInt(input);

let fibonacciT1 = 0;
let fibonacciT2 = 1;
const fibonacciSequence = [];

if (N < 2) {
    fibonacciSequence.push(fibonacciT1);
} else {
    fibonacciSequence.push(fibonacciT1, fibonacciT2);
}

let count = 2;
while (count < N) {
    count += 1;
    let fibonacciT3 = fibonacciT1 + fibonacciT2;
    fibonacciSequence.push(fibonacciT3);
    fibonacciT1 = fibonacciT2;
    fibonacciT2 = fibonacciT3;
}

console.log(fibonacciSequence.join(' '));
