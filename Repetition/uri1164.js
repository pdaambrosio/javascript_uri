const input = require('fs').readFileSync('./JavaScript-Uri/Repetition/stdin', 'utf8');
const values = input.split('\n').map(value => parseInt(value));
const loop = values.shift();

for (let i = 0; i < loop; i++) {
    const X = values.shift();
    let sumNum = 0;
    for (let num = 1; num < X; num++) {
        if (X % num === 0) {
            sumNum += num;
        }
    }
    const isPerfect = sum => (sum === X) ? `${X} eh perfeito` : `${X} nao eh perfeito`;
    console.log(isPerfect(sumNum));
}
