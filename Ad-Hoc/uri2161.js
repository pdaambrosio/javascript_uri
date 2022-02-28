const input = require('fs').readFileSync('./JavaScript-Uri/Ad-Hoc/stdin', 'utf8');
const N = parseInt(input.split('\n'));

const squareRootTen = (number) => {
    let equation = 1/6;

    if (number === 0) {
        return (3).toFixed(10);
    }

    while (number >= 2) {
        equation = 1/(6 + equation);
        number -= 1;
    }

    return `${(equation + 3).toFixed(10)}`
};


console.log(squareRootTen(1));
