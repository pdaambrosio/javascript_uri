// const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const input = require('fs').readFileSync('./JavaScript-Uri/Array/stdin', 'utf8');
const T = parseInt(input);
const nArray = [];

for (let i = 0; i < 10; i++) {
    let count = 0;
    while (count < T) {
        nArray.push(count);
        count += 1;
    }
    console.log(`N[${i}] = ${nArray[i]}`);
}
