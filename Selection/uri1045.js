const input = require('fs').readFileSync('./JavaScript-Uri/Selection/stdin', 'utf8');
const sidesTriangle = input.split(' ').map((value) => parseFloat(value));

let [A, B, C] = sidesTriangle.sort((a, b) => a - b).reverse();

if (A >= B + C) {
    console.log('NAO FORMA TRIANGULO');
} else if (Math.pow(A, 2) === (Math.pow(B, 2) + Math.pow(C, 2))) {
    console.log('TRIANGULO RETANGULO');
} else if (Math.pow(A, 2) > (Math.pow(B, 2) + Math.pow(C, 2))) {
    console.log('TRIANGULO OBTUSANGULO');
} else if (Math.pow(A, 2) < (Math.pow(B, 2) + Math.pow(C, 2))) {
    console.log('TRIANGULO ACUTANGULO');
}

if (A === B && B === C) {
    console.log('TRIANGULO EQUILATERO');
} else if (A === B || B === C) {
    console.log('TRIANGULO ISOSCELES');
}
