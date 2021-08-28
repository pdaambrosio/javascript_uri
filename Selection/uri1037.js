const input = require('fs').readFileSync('./stdin', 'utf8');
const num = parseFloat(input);

if (num >= 0 && num <= 25) {
    console.log('Intervalo [0,25]');
} else if (num >= 25.01 && num <= 50) {
    console.log('Intervalo (25,50]');
} else if (num >= 50.01 && num <= 75) {
    console.log('Intervalo (50,75]');
} else if (num >= 75.01 && num <= 100) {
    console.log('Intervalo (75,100]');
} else {
    console.log('Fora de intervalo')
}