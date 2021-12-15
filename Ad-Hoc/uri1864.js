const input = require('fs').readFileSync('./JavaScript-Uri/Ad-Hoc/stdin', 'utf8');
const N = parseInt(input.split('\n'));

const ourDays = (number) => {
    const word = 'LIFE IS NOT A PROBLEM TO BE SOLVED';
    console.log(word.slice(0, number));
};

ourDays(N);
