// const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const input = require('fs').readFileSync('./JavaScript-Uri/Array/stdin', 'utf8');
const numbers = input.split('\n').map(number => parseInt(number));
// let evenNumbers = numbers.filter(number => number % 2 === 0);
// let oddNumber = numbers.filter(number => number % 2 !== 0);
let evenNumbers = [];
let oddNumber = [];

for (let i = 0; i < 15; i++) {
    if (numbers[i] % 2 === 0) {
        evenNumbers.push(numbers[i]);
    } else {
        oddNumber.push(numbers[i]);
    }

    if (evenNumbers.length === 5) {
        for (let i = 0; i < 5; i++) {
            console.log(`par[${i}] = ${evenNumbers.shift()}`);
        }
    }

    if (oddNumber.length === 5) {
        for (let i = 0; i < 5; i++) {
            console.log(`impar[${i}] = ${oddNumber.shift()}`);
        }
    }
}

for (let i = 0; i < oddNumber.length; i++) {
    console.log(`impar[${i}] = ${oddNumber[i]}`);
}

for (let i = 0; i < evenNumbers.length; i++) {
    console.log(`par[${i}] = ${evenNumbers[i]}`);
}
