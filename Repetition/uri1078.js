const input = require('fs').readFileSync('./JavaScript-Uri/Repetition/stdin', 'utf8');
const value = parseInt(input);

for (let num = 1; num <= 10; num++) {
    console.log(`${num} x ${value} = ${value * num}`);
}
