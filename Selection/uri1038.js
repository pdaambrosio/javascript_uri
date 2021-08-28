const input = require('fs').readFileSync('./stdin', 'utf8');
const [cod, qtd] = input.split(' ').map(num => parseInt(num));

let vals = 0;

if (cod === 1) {
    val = 4;
    total = qtd * val;
    console.log(`Total: R$ ${total.toFixed(2)}`)
} else if (cod === 2) {
    val = 4.5;
    total = qtd * val;
    console.log(`Total: R$ ${total.toFixed(2)}`)
} else if (cod === 3) {
    val = 5;
    total = qtd * val;
    console.log(`Total: R$ ${total.toFixed(2)}`)
} else if (cod === 4) {
    val = 2;
    total = qtd * val;
    console.log(`Total: R$ ${total.toFixed(2)}`)
} else if (cod === 5) {
    val = 1.5;
    total = qtd * val;
    console.log(`Total: R$ ${total.toFixed(2)}`)
}