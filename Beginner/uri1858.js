const input = require('fs').readFileSync('./JavaScript-Uri/Beginner/stdin', 'utf8');
const values = input.split(/\s+/).map(value => parseInt(value));
const N = parseInt(values.shift());
const T = values.slice(0, N).map(value => parseInt(value));


const theonAnswer = (people) => {
    const minor = Math.min(...people);
    const result = people.indexOf(minor);
    console.log(result + 1);
};


theonAnswer(T);
