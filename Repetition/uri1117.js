const input = require('fs').readFileSync('./JavaScript-Uri/Repetition/stdin', 'utf8');
const scores = input.split('\n').map(score => parseFloat(score));

let average = 0;
let loop = 0;

while (loop < 2) {
    let score = scores.shift();
    if (score >= 0 && score <= 10) {
        average += score / 2;
        loop += 1;
    } else {
        console.log('nota invalida');
    }
}

console.log(`media = ${average.toFixed(2)}`);
