const input = require('fs').readFileSync('./JavaScript-Uri/Repetition/stdin', 'utf8');
const value = parseInt(input);

for (let num of Array(value + 1).keys()) {
    if (num % 2 === 0 && num > 0) {
        let square = Math.pow(num, 2);
        console.log(`${num}^2 = ${square}`);
    }
}
