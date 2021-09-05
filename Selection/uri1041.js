const input = require('fs').readFileSync('./JavaScript-Uri/Selection/stdin', 'utf8');
const [X, Y] = input.split(' ').map(num => parseFloat(num));

if (X === 0 && Y === 0) {
    console.log('Origem')
} else if (X === 0 && Y !== 0) {
    console.log('Eixo Y')
} else if (Y === 0 && X !== 0) {
    console.log('Eixo X')
} else if (X > 0 && Y > 0) {
    console.log('Q1')
} else if (X > 0 && Y < 0) {
    console.log('Q4')
} else if (X < 0 && Y > 0) {
    console.log('Q2')
} else {
    console.log('Q3')
}
