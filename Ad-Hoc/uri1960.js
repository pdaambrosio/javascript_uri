const input = require('fs').readFileSync('./JavaScript-Uri/Ad-Hoc/stdin', 'utf8');
let N = parseInt(input.split('\n'));

const roman = (number) => {
    const romanNumerals = {1000: 'M', 900: 'CM', 500: 'D', 400: 'CD', 100: 'C', 90: 'XC', 50: 'L', 40: 'XL', 10: 'X', 9: 'IX', 5: 'V', 4: 'IV', 1: 'I'};
    const keys = Object.keys(romanNumerals).reverse();
    const values = Object.values(romanNumerals).reverse();

    let index = 0;
    let result = '';

    while (number > 0) {
        if (number >= keys[index]) {
            result += values[index];
            number -= keys[index];
        } else {
            index += 1;
        }
    }

    return result;

};

console.log(roman(N))
