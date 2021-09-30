const input = require('fs').readFileSync('./JavaScript-Uri/Repetition/stdin', 'utf8');
const values = input.split(/\s+/).map(value => parseInt(value));

let loop = 0;
while (loop === 0) {
    let [X, Y] = values.slice(0, 2).map(value => values.shift(value));
    if (X > Y) {
        console.log('Decrescente');
    } else if (Y > X) {
        console.log('Crescente');
    } else {
        loop += 1;
    }
}
