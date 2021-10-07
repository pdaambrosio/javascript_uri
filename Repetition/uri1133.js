const input = require('fs').readFileSync('./JavaScript-Uri/Repetition/stdin', 'utf8');
const values = input.split('\n').map(value => parseInt(value));
const X = Math.min(...values);
const Y = Math.max(...values);

for (let value = X; value < Y; value++) {
    if (value % 5 === 2 || value % 5 === 3) {
        console.log(value)
    }
}
