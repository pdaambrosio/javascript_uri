const input = require('fs').readFileSync('./JavaScript-Uri/Selection/stdin', 'utf8');
const value = parseInt(input);

const referenceTable = {61: 'Brasilia', 71: 'Salvador', 11: 'Sao Paulo', 21: 'Rio de Janeiro', 32: 'Juiz de Fora', 19: 'Campinas', 27: 'Vitoria', 31: 'Belo Horizonte'};
let found = false;

for (let [ddd, city] of Object.entries(referenceTable)) {
    if (value === parseInt(ddd)) {
        console.log(city);
        found = true;
        break;
    }
}

if (!found) {
    console.log('DDD nao cadastrado');
}
