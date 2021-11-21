const input = require('fs').readFileSync('./JavaScript-Uri/Ad-Hoc/stdin', 'utf8');
const number = parseInt(input);
const result = 'Ho '.repeat(number - 1);

console.log(`${result}Ho!`);
