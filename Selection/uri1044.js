const input = require('fs').readFileSync('./JavaScript-Uri/Selection/stdin', 'utf8');
const [A, B] = input.split(' ').map((num) => parseInt(num));

if (A % B === 0 || B % A === 0) {
    console.log('Sao Multiplos');
} else {
    console.log('Nao sao Multiplos');
}
