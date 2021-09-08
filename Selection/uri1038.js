const input = require('fs').readFileSync('./JavaScript-Uri/Selection/stdin', 'utf8');
const [code, amount] = input.split(' ').map(num => parseInt(num));

const snackValue = {
    1: 4,
    2: 4.5,
    3: 5,
    4: 2,
    5: 1.5
};

for (let [key, value] of Object.entries(snackValue)) {
    if (code == key) {
        const total = amount * value;
        console.log(`Total: R$ ${total.toFixed(2)}`);
        break;
    }
}
