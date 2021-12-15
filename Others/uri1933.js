const input = require('fs').readFileSync('./JavaScript-Uri/Others/stdin', 'utf8');
const [C1, C2] = input.split(' ').map(value => parseInt(value));

function triDu(n1, n2) {
    let largeValue = n1;
    
    if (n1 < n2) {
        largeValue = n2;
    }

    return largeValue;
}

console.log(triDu(C1, C2));
