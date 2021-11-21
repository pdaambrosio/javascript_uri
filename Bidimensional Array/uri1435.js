const input = require('fs').readFileSync('./JavaScript-Uri/Bidimensional Array/stdin', 'utf8');
const values = input.split('\n').map(value => parseInt(value));
const loop = 0;

while (loop != values) {
    let number = values.shift();

    if (number === 0) {
        break;
    }

    let square = 0;

    if (number % 2 === 0) {
        square = Math.floor(number / 2);
    } else {
        square = Math.floor((number + 1) / 2);
    }

    const matrixArray = [];

    for (let line = 0; line < number; line++) {
        matrixArray[line] = new Array();
        for (let column = 0; column < number; column++) {
            matrixArray[line].push(1);
        }
    }

    let first = 0;
    let last = number;
    let count = 0;

    for (increment = 0; increment < square; increment++) {
        count += 1;
        for (let line = first; line < last; line++) {
            for (let column = first; column < last; column++) {
                matrixArray[line][column] = count;
            }
        }
        first += 1;
        last -= 1;
    }

    for (line = 0; line < number; line++) {
        let result = '';
        for (let column = 0; column < number; column++) {
            result += ` ${matrixArray[line][column]}`;
        }
        console.log(...result);
    }
    console.log();
}

// Presentation error (15%)
// Under analyzing
