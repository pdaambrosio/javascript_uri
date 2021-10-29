// const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const input = require('fs').readFileSync('./JavaScript-Uri/Array/stdin', 'utf8');
const xArray = [];

xArray.push(parseFloat(input));

for (let i = 0; i < 100; i++) {
    console.log(`N[${i}] = ${xArray[i].toFixed(4)}`);
    // console.log(`N[${i}] = ${xArray[i].toLocaleString('en-US', {minimumFractionDigits: 4})}`);
    xArray.push(xArray[i] / 2);
}

// Wrong answer. Because "toFixed" rounds the return value. Under review.
// Example
// Wrong answer: N[8] = 0.7813 
// Correct answer: N[8] = 0.7812
