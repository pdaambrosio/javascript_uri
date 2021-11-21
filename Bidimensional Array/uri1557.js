const input = require('fs').readFileSync('./JavaScript-Uri/Bidimensional Array/stdin', 'utf8');
const values = input.split('\n').map(value => parseInt(value));
const loop = 0;

while (loop != values) {
    let number = values.shift();

    if (number === 0) {
        break;
    }

    if (number === 1) {
        console.log(number);
    } else {
        const matrixArray = [];
        let value = 1;
    
        for (let line = 0; line < number; line++) {
            matrixArray[line] = new Array();
            for (let column = 0; column < number; column++) {
                matrixArray[line].push(value);
                value *= 2;
            }
            value = matrixArray[line][1];
        }
    
        const space = (matrixArray[number -1][number - 1]).toString();
    
        for (line = 0; line < number; line++) {
            for (let column = 0; column < number; column++) {
                matrixArray[line][column] = (matrixArray[line][column]).toString();

                while (matrixArray[line][column].length < space.length) {
                    matrixArray[line][column] = ' ' + matrixArray[line][column];
                }

            }
            let result = matrixArray[line].join(' ');
            console.log(result);
        }
    }
    console.log();
}
