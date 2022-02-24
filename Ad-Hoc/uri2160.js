const input = require('fs').readFileSync('./JavaScript-Uri/Ad-Hoc/stdin', 'utf8');
const text = input.split('\n');
const L = text.shift();

const nameAtForm = (text) => {
    return text.length <= 80 ? 'YES' : 'NO';
};

console.log(nameAtForm(L));
