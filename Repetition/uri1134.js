const input = require('fs').readFileSync('./JavaScript-Uri/Repetition/stdin', 'utf8');
const values = input.split('\n').map(value => parseInt(value));
const typesFuel = {'Alcool': 0,'Gasolina': 0,'Diesel': 0};

let control = 0;
while (control !== 4) {
    control = values.shift();
    if (control === 1) {
        typesFuel.Alcool += 1;
    } else if (control === 2) {
        typesFuel.Gasolina += 1;
    } else if (control === 3) {
        typesFuel.Diesel += 1;
    }
}

console.log('MUITO OBRIGADO');
console.log(`Alcool: ${typesFuel.Alcool}`);
console.log(`Gasolina: ${typesFuel.Gasolina}`);
console.log(`Diesel: ${typesFuel.Diesel}`);
