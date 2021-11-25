const input = require('fs').readFileSync('./JavaScript-Uri/Bidimensional Array/stdin', 'utf8');
const values = input.split('\n').map(value => parseInt(value));
const matrixArray = [];
const loop = 0;

while (loop != values) {
    const N = parseInt(values.shift());
    let numberOne = parseInt(N / 3);
    let numberThree =  N - 1;

    for (let line = 0; line < N; line++) {
        matrixArray[line] = [];
        for (let column = 0; column < N; column++) {
            if (line === column) {
                matrixArray[line].push(2);
            } else {
                matrixArray[line].push(0);
            }

            if (column === numberThree) {
                matrixArray[line][column] = 3;
                numberThree -= 1;
            }
        }
    }

    for (let line = numberOne; line < N - numberOne; line++) {
        for (let column = numberOne; column < N - numberOne; column++) {
            matrixArray[line][column] = 1;

            if (line === parseInt(N / 2) && column === parseInt(N / 2)) {
                matrixArray[line][column] = 4;
            }
        }
    }

    for (let line = 0; line < N; line++) {
        console.log(matrixArray[line].join(''));
    }
    console.log();
}

//TODO: The output is apparently correct, but there is a "Presentation error".
