const input = require('fs').readFileSync('./JavaScript-Uri/Bidimensional Array/stdin', 'utf8');
const values = input.split('\n');
const character = values.shift().toUpperCase();
const matrixArray = [];

let sumLeft = 0;
let nextColumn = 11;
let countForAverage = 0;

for (let line = 0; line < 12; line++) {
    matrixArray[line] = new Array();
    for (let column = 0; column < 12; column++){
        matrixArray[line].push(parseFloat(values.shift()));
    }
}

for (let line = 0; line < 11; line++) {
    for (let column = 11; column > nextColumn; column--) {
        sumLeft += matrixArray[line][column];
        countForAverage += 1;
        console.log(`Line: ${line}`)
        console.log(`Column: ${column}`)
    }
    if (line < 5) {
        nextColumn -= 1;
    }
    if (line > 5) {
        nextColumn += 1;
    }
}

const result = character === 'S' ? sumLeft.toFixed(1) : (sumLeft / countForAverage).toFixed(1);
console.log(result);
