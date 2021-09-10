const input = require('fs').readFileSync('./JavaScript-Uri/Selection/stdin', 'utf8');
const salary = parseFloat(input);

let readjustment = 0;

if (salary <= 400) {
    readjustment = 15;
} else if (salary <= 800) {
    readjustment = 12;
} else if (salary <= 1200) {
    readjustment = 10;
} else if (salary <= 2000) {
    readjustment = 7;
} else {
    readjustment = 4;
}

console.log(`Novo salario: ${(salary + (salary * readjustment/100)).toFixed(2)}`);
console.log(`Reajuste ganho: ${(salary * readjustment/100).toFixed(2)}`);
console.log(`Em percentual: ${readjustment} %`);
