const input = require('fs').readFileSync('./JavaScript-Uri/Selection/stdin', 'utf8');
const values = input.split(' ').map((num) => parseInt(num));

const valueSorted = [...values].sort((a, b) => a - b);

for (let i of valueSorted) {
    console.log(i);
}

console.log();

for (let i of values) {
    console.log(i);
}
