const input = require('fs').readFileSync('./JavaScript-Uri/Bidimensional Array/stdin', 'utf8');
const values = input.split('\n').map(value => parseInt(value));
const loop = 0;

while (loop != values) {
    let number = values.shift();

    if (number === 0) {
        break;
    }

    const matrixArray = [];

    for (let line = 0; line < number + 1; line++) {
        let count = line;
        matrixArray[line] = new Array();
        for (let column = 0; column < number; column++) {
            matrixArray[line].push(Math.abs(count));

            if (count === 1) {
                count -= 3;
            } else {
                count -= 1;
            }

        }
    }

    for (line = 1; line < number + 1; line++) {
        let result = '';
        for (let column = 0; column < number; column++) {
            result += `   ${matrixArray[line][column]}`;
        }
        console.log(result);
    }
    console.log();
}

// Presentation error (10%)
// Under analyzing
