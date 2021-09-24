const input = require('fs').readFileSync('./JavaScript-Uri/Repetition/stdin', 'utf8');
const value = parseInt(input);

for (let i = 1; i < 10001; i++) {
    if (i % value === 2) {
        console.log(i);
    }
}
