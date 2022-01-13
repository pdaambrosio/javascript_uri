const input = require('fs').readFileSync('./JavaScript-Uri/Math/stdin', 'utf8');
const values = input.split(/\s+/).map(value => parseInt(value));
const loop = values.shift();

const macPronalts = (prodNum, amount) => {
    const products = {1001: 1.50, 1002: 2.50, 1003: 3.50, 1004: 4.50, 1005: 5.50};
    const totalPurchased = (products[prodNum] * amount);

    return totalPurchased;
};

let costumerPurchased = 0;

for (let i = 0; i < loop; i++) {
    const [prodNum, prodAmount] = values.splice(0, 2);
    costumerPurchased += macPronalts(prodNum, prodAmount);
}

console.log(costumerPurchased.toFixed(2));
