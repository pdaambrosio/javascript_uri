const input = require('fs').readFileSync('./JavaScript-Uri/Repetition/stdin', 'utf8');
const value = parseInt(input);

let sum = 1;
let loop = 0;

while (loop < value) {
    loop += 1;
    console.log(`${sum} ${sum + 1} ${sum + 2} PUM`);
    sum += 4;
}
