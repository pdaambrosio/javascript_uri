// const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const input = require('fs').readFileSync('./JavaScript-Uri/Array/stdin', 'utf8');
const values = input.split('\n').map(value => parseInt(value));
const loop = values.shift();

let fibonacciT1 = 0;
let fibonacciT2 = 1;
const fibonacciSequence = [0, 1];

for (let i = 0; i <= 60; i++) {
    let fibonacciT3 = fibonacciT1 + fibonacciT2;
    fibonacciSequence.push(fibonacciT3);
    fibonacciT1 = fibonacciT2;
    fibonacciT2 = fibonacciT3;
}

for (let i = 0; i < loop; i++) {
    let N = values.shift();
    console.log(`Fib(${N}) = ${fibonacciSequence[N]}`);
}
