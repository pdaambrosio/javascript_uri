const input = require('fs').readFileSync('./JavaScript-Uri/Repetition/stdin', 'utf8');
const numbers = input.split('\n').map(value => parseInt(value));

let evenNumbers = 0;
let oddNumbers = 0;
let positive = 0;
let negative = 0;

for (let number of numbers) {
    if (number % 2 === 0) {
        evenNumbers += 1;
    } else {
        oddNumbers += 1
    }
    
    if (number > 0) {
        positive += 1;
    } else if (number < 0) {
        negative += 1;
    }
}

console.log(`${evenNumbers} valor(es) par(es)`);
console.log(`${oddNumbers} valor(es) impar(es)`);
console.log(`${positive} valor(es) positivo(s)`);
console.log(`${negative} valor(es) negativo(s)`);
