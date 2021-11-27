const input = require('fs').readFileSync('./JavaScript-Uri/Ad-Hoc/stdin', 'utf8');
const [A, B] = input.split(' ').map(number => parseInt(number));

const quotientDivision = (num1, num2) => {
    for (let i = 0;  i < Math.abs(B); i++) {
        if ((A - i) % B === 0) {
            let result = parseInt((A - i) / B);
            console.log(result, i);
            break;
        }
    }
};

quotientDivision(A, B);
