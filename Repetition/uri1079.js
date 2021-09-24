const input = require('fs').readFileSync('./JavaScript-Uri/Repetition/stdin', 'utf8');
const grades = input.split('\n');
const loop = parseInt(grades.shift());

for (let i = 0; i < loop; i++) {
    let [n1, n2, n3] = grades[i].split(' ').map(value => parseFloat(value));
    console.log(((n1 * 2 + n2 * 3 + n3 * 5) / 10).toFixed(1));
}
