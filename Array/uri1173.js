const input = require('fs').readFileSync('./JavaScript-Uri/Array/stdin', 'utf8');
let X = parseInt(input);
const xArray = [];

xArray.push(X);

for (let i = 0; i < 9; i++) {
    X *= 2;
    xArray.push(X);
}

for (let i = 0; i < xArray.length; i++) {
    console.log(`N[${i}] = ${xArray[i]}`);
}
