const input = require('fs').readFileSync('./JavaScript-Uri/Simulation/stdin', 'utf8');
const values = input.split(/\s+/).map(value => parseInt(value));
const N = values.shift();
const X = values.splice(0, N);

const starTrek = (numberStars, numberSheeps) => {
    let totalAttacks = numberSheeps.reduce((a, b) => a + b);
    let attackedStars = Array(numberStars).fill(0);
    let loop = 0;

    while (loop >= 0 && loop < numberStars) {
        const sideTest = numberSheeps[loop] % 2;

        if (numberSheeps[loop] > 0) {
            numberSheeps[loop] -= 1;
            attackedStars[loop] = 1;
            totalAttacks -= 1;
        }

        if (sideTest) {
            loop += 1;
        } else {
            loop -= 1;
        }

    }

    attackedStars = attackedStars.filter(value => value === 1).length;

    return `${attackedStars} ${totalAttacks}`;
};

console.log(starTrek(N, X));
