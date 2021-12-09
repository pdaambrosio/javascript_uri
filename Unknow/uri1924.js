const input = require('fs').readFileSync('./JavaScript-Uri/Unknow/stdin', 'utf8');
const values = input.split('\n');
const N = parseInt(values.shift());

const victoriaIndecision = (number) => {
    const courses = [];
    
    for (let i = 0; i < number; i++) {
        courses.push(values.shift());
    }

    console.log('Ciencia da Computacao');
};

victoriaIndecision(N);
