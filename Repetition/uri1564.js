const input = require('fs').readFileSync('./JavaScript-Uri/Repetition/stdin', 'utf8');
const values = input.split('\n').map(value => parseInt(value));

for (let i = 0; i < values.length; i++) {
    const N = values[i];

    if (isNaN(N)) {
        break;
    } else {
        console.log(N >= 1 ? 'vai ter duas!' : 'vai ter copa!');
    }

}
