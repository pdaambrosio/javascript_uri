const input = require('fs').readFileSync('./JavaScript-Uri/Ad-Hoc/stdin', 'utf8');
const N = parseInt(input);

function fastFibonacci(number) {
    const N1 = Math.pow((1 + Math.sqrt(5)) / 2.0, number);
    const N2 = Math.pow((1 - Math.sqrt(5)) / 2.0, number);
    const result = (N1 - N2) / Math.sqrt(5);

    return result.toFixed(1);
}

console.log(fastFibonacci(N))
