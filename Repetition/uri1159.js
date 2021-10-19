const input = require('fs').readFileSync('./JavaScript-Uri/Repetition/stdin', 'utf8');
const numbers = input.split('\n').map(number => parseInt(number));

let X = numbers.shift();

while (X !== 0) {
    let sumEvenNumbers = 0;
    let loop = 0;
    while (loop < 5) {
        if (X % 2 === 0) {
            sumEvenNumbers += X;
            loop += 1;
        }
        X += 1;
    }
    console.log(sumEvenNumbers);
    X = numbers.shift();
}
