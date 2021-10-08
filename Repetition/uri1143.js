const input = require('fs').readFileSync('./JavaScript-Uri/Repetition/stdin', 'utf8');
const loop = parseInt(input);

for (let i = 1; i < loop + 1; i++) {
    console.log(`${i} ${i**2} ${i**3}`);
}
