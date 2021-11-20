const input = require('fs').readFileSync('./JavaScript-Uri/Repetition/stdin', 'utf8');
const values = input.split(/\s+/).map(value => parseInt(value));
const loop = values.shift();

for (let i = 0; i < loop; i++) {
    let R1 = values.shift();
    let R2 = values.shift();
    console.log(R1 + R2);
}
