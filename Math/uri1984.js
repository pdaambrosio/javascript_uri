const input = require('fs').readFileSync('./JavaScript-Uri/Math/stdin', 'utf8');
const numberFound = parseInt(input);

const pronalanciaPuzzle = (numbers) => {
    numbers = String(numbers).split('').reverse();
    const result = numbers.join('');
    return result;
};

console.log(pronalanciaPuzzle(numberFound))
