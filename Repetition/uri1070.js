const input = require('fs').readFileSync('./JavaScript-Uri/Repetition/stdin', 'utf8');
let value = parseInt(input);

for (let number of Array(value + 12).keys()) {
    if (number % 2 !== 0 && number >= value) {
        console.log(number);
    }
}
