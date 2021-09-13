const input = require('fs').readFileSync('./JavaScript-Uri/Selection/stdin', 'utf8');
const salary = parseFloat(input);

if (salary <= 2000) {
    console.log('Isento')
} else if (salary <= 3000) {
    let taxes = (salary - 2000) * 0.08;
    console.log(`R$ ${taxes.toFixed(2)}`);
} else if (salary <= 4500) {
    taxes = ((salary - 3000) * 0.18) + (1000 * 0.08);
    console.log(`R$ ${taxes.toFixed(2)}`);
} else {
    taxes = ((salary - 4500) * 0.28) + (1500 * 0.18) + (1000 * 0.08);
    console.log(`R$ ${taxes.toFixed(2)}`);
}
