const input = require('fs').readFileSync('./JavaScript-Uri/Ad-Hoc/stdin', 'utf8');
const values = input.split(/\s+/);
const [N, M] = values.splice(0, 2).map(value => parseInt(value));

function closingTabs (numTabs, numActions) {
    for (let i = 0; i < numActions; i++) {
        const action = values.shift();
        if (action === 'fechou') {
            numTabs += 1;
        } else {
            numTabs -= 1;
        }
    }
    return numTabs;
}

console.log(closingTabs(N, M));
