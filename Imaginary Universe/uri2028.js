const input = require('fs').readFileSync('./JavaScript-Uri/Imaginary Universe/stdin', 'utf8');
const values = input.split('\n').map(value => parseInt(value));

const sequenceOfSequence = (countCase, number) => {
    let result = [0];
    for (let i = 1; i < number + 1; i++) {
        result.push(Array(i).fill(i));
    }

    result = result.flat(Infinity);

    if (result.length > 1) {
        return `Caso ${countCase}: ${result.length} numeros\n${result.join(' ')}\n`;
    } else {
        return `Caso ${countCase}: ${result.length} numero\n${result}\n`;
    }
};

let countCase = 1;

for (let i = 0; i < values.length; i++) {
    if (isNaN(values[i])) {
        break;
    } else {
        console.log(sequenceOfSequence(countCase, values[i]));
    }

    countCase += 1;
}
