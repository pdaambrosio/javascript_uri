const input = require('fs').readFileSync('./JavaScript-Uri/Ad-Hoc/stdin', 'utf8');
const [N, L] = input.split(' ').map(value => parseInt(value));

function simplePolygons(num1, num2) {
    return num1 * num2;
}

console.log(simplePolygons(N, L));
