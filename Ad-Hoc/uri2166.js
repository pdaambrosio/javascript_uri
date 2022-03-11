const input = require('fs').readFileSync('./javascript_uri/Ad-Hoc/stdin', 'utf8');
let N = parseInt(input);

const squareRoot = (num) => {
    let result = 2;

    if (num === 0) {
        return result;
    }

    result += 1 / squareRoot(num - 1);
    return result;
};

N = (squareRoot(N) - 1).toFixed(10);

console.log(N);
