const input = require('fs').readFileSync('./JavaScript-Uri/Others/stdin', 'utf8');
const values = input.split(/\s+/);
const N = parseInt(values.shift());

const mjolnir = (challenging) => {
    for (let i = 0; i < challenging; i++) {
        const name = values.splice(0, 2);

        if (name[0] === 'Thor') {
            console.log('Y');
        } else {
            console.log('N');
        }
    }
};

mjolnir(N);
