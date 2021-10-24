const input = require('fs').readFileSync('./JavaScript-Uri/Array/stdin', 'utf8');
const X = input.split('\n').map(value => parseInt(value));

for (let i = 0; i < 10; i++) {
    if (X[i] > 0) {
        console.log(`X[${i}] = ${X[i]}`);
    } else {
        console.log(`X[${i}] = 1`);
    }
}
