const input = require('fs').readFileSync('./javascript_uri/Ad-Hoc/stdin', 'utf8');
const values = input.split(/\s+/).map(value => parseInt(value));
const N = values.shift();
const R = values;

function engineFailure(num, rpm) {
    let resutl = 0;

    for (let i = 1; i < num; i++) {
        if (rpm[i - 1] > rpm[i]) {
            resutl = i + 1;
            break;
        }
    }
    return resutl;
}

console.log(engineFailure(N, R));
