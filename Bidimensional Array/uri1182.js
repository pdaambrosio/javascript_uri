const input = require('fs').readFileSync('./JavaScript-Uri/Bidimensional Array/stdin', 'utf8');
const values = input.split('\n');
const [column, character] = values.splice(0, 2);

const matrixArray = [];
let sumColumn = 0;

for (let lines = 0; lines < 12; lines++) {
    matrixArray[lines] = new Array();
    for (let columns = 0; columns < 12; columns++) {
        matrixArray[lines].push(parseFloat(values.shift()));
    }
}

for (let i = 0; i < 12; i++) {
    sumColumn += matrixArray[i][column];
}

const result = character.toUpperCase() === 'S' ? sumColumn.toFixed(1) : (sumColumn / 12).toFixed(1);
console.log(result);
