const input = require('fs').readFileSync('./JavaScript-Uri/Ad-Hoc/stdin', 'utf8');
const values = input.split(/\s+/).map(value => parseInt(value));
const N = values.shift();
const H = values.splice(0, N);

function peaksAndValleys(number, arrayNumber) {
    let peak = 1;
    if (number === 2 && arrayNumber[0] === arrayNumber[1]) {
        peak = 0;
    }

    for (let i = 1; i < (N - 1); i++) {
        if (!((arrayNumber[i] < arrayNumber[i - 1] && arrayNumber[i] < arrayNumber[i + 1]) || (arrayNumber[i] > arrayNumber[i - 1] && arrayNumber[i] > arrayNumber[i + 1]))) {
            peak = 0;
        }
    }
    return peak;
}


console.log(peaksAndValleys(N, H));
