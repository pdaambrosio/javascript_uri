const input = require('fs').readFileSync('./JavaScript-Uri/Bidimensional Array/stdin', 'utf8');
const values = input.split('\n');
const character = values.shift().toUpperCase();
const matrixArray = [];

let sumDiagonal = 0;
let nextColumn = 10;
let countForAverage = 0;

for (let line = 0; line < 12; line++) {
    matrixArray[line] = new Array();
    for (let column = 0; column < 12; column++) {
        matrixArray[line].push(parseFloat(values.shift()));
    }
}

for (let line = 0; line <= 10; line++) {
    for (let column = nextColumn; column >= 0; column--) {
        sumDiagonal += matrixArray[line][column];
        countForAverage += 1;
    }
    nextColumn -= 1;
}

const result = character === 'S' ? sumDiagonal.toFixed(1) : (sumDiagonal / countForAverage).toFixed(1);
console.log(result);
