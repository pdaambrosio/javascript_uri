const input = require('fs').readFileSync('./JavaScript-Uri/Repetition/stdin', 'utf8');
let value = parseInt(input);

for (value of Array(value + 1).keys()) {
    if (value % 2 !== 0) {
        console.log(value);
    }
}
