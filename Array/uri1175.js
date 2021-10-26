// const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const input = require('fs').readFileSync('./JavaScript-Uri/Array/stdin', 'utf8');
const nArray = input.split('\n').map(n => parseInt(n));

nArray.reverse();

for (let i = 0; i < nArray.length; i++) {
    console.log(`N[${i}] = ${nArray[i]}`);
}
