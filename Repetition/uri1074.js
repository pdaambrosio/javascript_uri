const input = require('fs').readFileSync('./JavaScript-Uri/Repetition/stdin', 'utf8');
const values = input.split('\n').map(num => parseInt(num));
const loop = values.shift();

for (let i of Array(loop).keys()) {
    if (values[i] % 2 === 0 && values[i] > 0) {
        console.log('EVEN POSITIVE');
    } else if (values[i] % 2 === 0 && values[i] < 0) {
        console.log('EVEN NEGATIVE');
    } else if (values[i] % 2 !== 0 && values[i] > 0) {
        console.log('ODD POSITIVE');
    } else if (values[i] % 2 !== 0 && values[i] < 0) {
        console.log('ODD NEGATIVE');
    } else {
        console.log('NULL');
    }
}
