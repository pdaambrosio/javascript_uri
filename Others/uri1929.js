const input = require('fs').readFileSync('./JavaScript-Uri/Others/stdin', 'utf8');
const [A, B, C, D] = input.split(' ').map(value => parseInt(value));

const lengths = (a, b, c) => {
    if (Math.abs(b - c) < a && a < b + c || Math.abs(a - c) < b && b < a + c || Math.abs(a - b) < c && c < a + b) {
        return true
    } 
    else {
        return false;
    }
};

const triangle = (a, b, c, d) => {
    if (lengths(a, b, c) || lengths(a, b, d) || lengths(a, c, d) || lengths(b, c, d)) {
        return 'S';
    }
    else {
        return 'N';
    }
};

console.log(triangle(A, B, C, D));
