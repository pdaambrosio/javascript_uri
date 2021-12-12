const input = require('fs').readFileSync('./JavaScript-Uri/Ad-Hoc/stdin', 'utf8');
const [A, B] = input.split(' ').map(number => parseInt(number));

const quotientDivision = (num1, num2) => {
    for (let i = 0;  i < Math.abs(num2); i++) {
        if ((num1 - i) % num2 === 0) {
            let result = parseInt((num1 - i) / num2);
            console.log(result, i);
            break;
        }
    }
};

quotientDivision(A, B);
