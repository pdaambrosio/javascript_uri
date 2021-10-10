const input = require('fs').readFileSync('./JavaScript-Uri/Repetition/stdin', 'utf8');
const numbers = input.split('\n').map(number => parseInt(number));

let seqNumbers = [];
let loop = numbers.shift();

while (loop !== 0) {
    for (let n = 1; n <= loop; n++) {
        seqNumbers.push(n);
    }
    console.log(...seqNumbers);
    seqNumbers = [];
    loop = numbers.shift();
}
