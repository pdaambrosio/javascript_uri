const input = require('fs').readFileSync('./JavaScript-Uri/Repetition/stdin', 'utf8');
const values = input.split(/\s+/).map(value => parseInt(value));
const N = values.shift();
const L = values;

const binosChallenge = (loop, numbers) => {
    let [multipleTwo, multipleTree, multipleFor, multipleFive] = Array(4).fill(0);

    for (let i = 0; i < loop; i++) {
        if (numbers[i] % 2 === 0) {
            multipleTwo += 1;
        } if (numbers[i] % 3 === 0) {
            multipleTree += 1;
        } if (numbers[i] % 4 === 0) {
            multipleFor += 1;
        } if (numbers[i] % 5 === 0) {
            multipleFive += 1;
        }
    }

    return `${multipleTwo} Multiplo(s) de 2\n${multipleTree} Multiplo(s) de 3\n${multipleFor} Multiplo(s) de 4\n${multipleFive} Multiplo(s) de 5`;
};

console.log(binosChallenge(N, L));
