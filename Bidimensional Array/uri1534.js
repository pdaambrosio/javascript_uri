const input = require('fs').readFileSync('./JavaScript-Uri/Bidimensional Array/stdin', 'utf8');
const values = input.split('\n');
const matrixArray = [];

for (let loop = 0; loop < input.length; loop++) {
    const N = values.shift();
    let count = null;

    for (let line = 0; line < N; line++) {
        matrixArray[line] = new Array();
        for (let column = 0; column < N; column++) {
            matrixArray[line].push('3');
        }

        count = N - 1;
    }

    for (let i = 0; i < N; i++) {
        matrixArray[i][i] = '1';
        matrixArray[i][count] = '2';
        count -= 1;

        console.log(matrixArray[i].join(''))
    }
}
