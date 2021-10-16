const input = require('fs').readFileSync('./JavaScript-Uri/Repetition/stdin', 'utf8');
const data = input.split(/\s+/).map(value => parseInt(value));
const ages = data.filter(value => value >= 0)

const average = ages.reduce((a, b) => a + b) / ages.length;

console.log(average.toFixed(2));
