const input = require('fs').readFileSync('./javascript_uri/Unknow/stdin', 'utf8');
const values = input.split(/\s+/).map(value => parseInt(value));
const corners = values.shift();
const cams = values;

const twilightAtPortland = (n, c) => {
    const matrixArray = [];

    for (let line = 0; line < n + 1; line++) {
        matrixArray[line] = [];
        for (let column = 0; column < n + 1; column++) {
          matrixArray[line].push(c.shift());
        }
    }

    const results = [];

    for (let line = 0; line < n; line++) {
        results[line] = [];
        for (let column = 0; column < n; column++) {
            if ((matrixArray[line][column] + matrixArray[line][column + 1] + matrixArray[line + 1][column] + matrixArray[line + 1][column + 1]) < 2) {
                results[line].push('U');
            } else {
                results[line].push('S');
            }
        }
    }
    
    for (let result of results) {
        console.log(result.toString().replace(/,/g, ''));
    }
};

twilightAtPortland(corners, cams);
