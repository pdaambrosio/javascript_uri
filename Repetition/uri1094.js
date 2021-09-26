const input = require('fs').readFileSync('./JavaScript-Uri/Repetition/stdin', 'utf8');
const allValues = input.split('\n').map(value => value);
const loop = allValues.shift();

let testCases = []
for (let i = 0; i < loop; i++) {
    let [numAnimal, animalType] = allValues[i].split(' ');
    testCases.push(animalType, parseInt(numAnimal))
}

let rabbits = testCases.reduce((array, value, index) => value === 'C' ? array.concat(testCases[index + 1]) : array, []);
let rats = testCases.reduce((array, value, index) => value === 'R' ? array.concat(testCases[index + 1]) : array, []);
let frogs = testCases.reduce((array, value, index) => value === 'S' ? array.concat(testCases[index + 1]) : array, []);

const total = [...rabbits, ...rats, ...frogs].reduce((a, b) => a + b);

console.log(`Total: ${total} cobaias`);
console.log(`Total de coelhos: ${rabbits.reduce((a, b) => a + b)}`);
console.log(`Total de ratos: ${rats.reduce((a, b) => a + b)}`);
console.log(`Total de sapos: ${frogs.reduce((a, b) => a + b)}`);
console.log(`Percentual de coelhos: ${((100 * rabbits.reduce((a, b) => a + b)) / total).toFixed(2)} %`);
console.log(`Percentual de ratos: ${((100 * rats.reduce((a, b) => a + b)) / total).toFixed(2)} %`);
console.log(`Percentual de sapos: ${((100 * frogs.reduce((a, b) => a + b)) / total).toFixed(2)} %`);
