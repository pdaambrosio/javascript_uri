const input = require('fs').readFileSync('./JavaScript-Uri/Others/stdin', 'utf8');
const [T1, T2, T3, T4] = input.split(' ').map(value => parseInt(value));

const powerStrip = (n1, n2, n3, n4) => {
    return (n1 + n2 + n3 + n4) - 3;
};

console.log(powerStrip(T1, T2, T3, T4));
