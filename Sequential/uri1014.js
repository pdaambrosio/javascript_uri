const input = require('fs').readFileSync('./stdin', 'utf8');
const [X, Y] = input.split('\n').map(line => parseFloat(line));

let kmLitro = X / Y;

console.log(`${kmLitro.toFixed(3)} km/l`);