const input = require('fs').readFileSync('./JavaScript-Uri/Selection/stdin', 'utf8');
const [A, B, C] = input.split(' ').map((num) => parseFloat(num));

if (A + B > C && A + C > B && C + B > A) {
    const perimeter = A + B + C;
    console.log(`Perimetro = ${perimeter.toFixed(1)}`);
} else {
    const area = 0.5 * (A + B) * C;
    console.log(`Area = ${area.toFixed(1)}`);
}
