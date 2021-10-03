const input = require('fs').readFileSync('./JavaScript-Uri/Repetition/stdin', 'utf8');
const scores = input.split('\n').map(score => parseFloat(score));

let newCalc = 1;
while (newCalc == 1) {
    let loop = 0;
    let average = 0;
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
    console.log('novo calculo (1-sim 2-nao)');
    newCalc = scores.shift();
    while (newCalc != 1 && newCalc != 2) {
        console.log('novo calculo (1-sim 2-nao)');
        newCalc = scores.shift();
    }
}
