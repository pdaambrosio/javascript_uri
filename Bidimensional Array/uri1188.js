const input = require('fs').readFileSync('./JavaScript-Uri/Bidimensional Array/stdin', 'utf8');
const values = input.split('\n');
const character = values.shift().toUpperCase();
const matrixArray = [];

let sumDownCenter = 0;
let endColumn = 11;
let nextColumn = 1;
let countForAverage = 0;

for (let line = 0; line < 12; line++) {
    matrixArray[line] = new Array();
    for (let column = 0; column < 12; column++){
        matrixArray[line].push(parseFloat(values.shift()));
    }
}

for (let line = 11; line >= 7; line--) {
    for (let column = nextColumn; column < endColumn; column++) {
        sumDownCenter += matrixArray[line][column];
        countForAverage += 1;
    }
    nextColumn += 1;
    endColumn -= 1;
}

const result = character === 'S' ? sumDownCenter.toFixed(1) : (sumDownCenter / countForAverage).toFixed(1);
console.log(result);
