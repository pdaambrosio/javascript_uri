const input = require('fs').readFileSync('./JavaScript-Uri/Ad-Hoc/stdin', 'utf8')
const [oldPrice, newPrice] = input.split(' ').map(value => parseFloat(value));

const theMotionPicture = (A, B) => {
    return `${(((B - A) / A) * 100).toFixed(2)}%`;
};

console.log(theMotionPicture(oldPrice, newPrice));
