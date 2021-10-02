const input = require('fs').readFileSync('./JavaScript-Uri/Repetition/stdin', 'utf8');
const values = input.split(/\s+/).map(value => parseInt(value));

let loop = 0;
while (loop === 0) {
    let [X, Y] = values.slice(0, 2).map(value => values.shift());
    if (X > 0 && Y > 0) {
        console.log('primeiro');
    } else if (X < 0 && Y > 0) {
        console.log('segundo');
    } else if (X < 0  && Y < 0) {
        console.log('terceiro');
    } else if (X > 0 && Y < 0) {
        console.log('quarto');
    } else {
        loop += 1;
    }
}
