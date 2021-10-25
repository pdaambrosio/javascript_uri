// const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const input = require('fs').readFileSync('./JavaScript-Uri/Array/stdin', 'utf8');
const values = input.split('\n').map(value => parseFloat(value));
const xArray = [];

for (let i = 0; i < 100; i++) {
    const X = values.shift();
    if (X <= 10) {
        xArray.push(X);
        console.log(`A[${i}] = ${X.toFixed(1)}`);
    }
}
