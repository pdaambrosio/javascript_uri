const input = require('fs').readFileSync('./JavaScript-Uri/Repetition/stdin', 'utf8');
const values = input.split(/\s+/).map(value => parseInt(value));
const loop = values.shift();

for (let i = 0; i < loop; i++) {
    let [X, Y] = values.splice(0, 2);
    if (Y === 0) {
        console.log('divisao impossivel');
    } else {
        let dividing = X / Y;
        console.log(dividing.toFixed(1));
    }
}
