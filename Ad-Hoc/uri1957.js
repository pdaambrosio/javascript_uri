const input = require('fs').readFileSync('./JavaScript-Uri/Ad-Hoc/stdin', 'utf8');
const V = parseInt(input);

const convertHex = (num) => {
    return num.toString(16).toUpperCase();
};

console.log(convertHex(V));
