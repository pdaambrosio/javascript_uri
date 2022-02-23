const input = require('fs').readFileSync('./JavaScript-Uri/Ad-Hoc/stdin', 'utf8');
const N = parseInt(input);

const approximateNumberPrimes = (number) => {
    return `${(number / Math.log(number)).toFixed(1)} ${(1.25506 * (number / Math.log(number))).toFixed(1)}`;
};

console.log(approximateNumberPrimes(N))
