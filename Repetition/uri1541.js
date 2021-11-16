const input = require('fs').readFileSync('./JavaScript-Uri/Repetition/stdin', 'utf8');
const values = input.split('\n');

for (let i = 0; i < values.length; i++) {

    if (values[i] === '0') {
        break;
    }

    const [A, B, C] = values[i].split(' ').map(value => parseInt(value));
    const meters = (A * B * 100) / C;
    const sizeOfLand = parseInt(Math.sqrt(meters));

    console.log(sizeOfLand);
}
