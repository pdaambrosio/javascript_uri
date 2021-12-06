const input = require('fs').readFileSync('./JavaScript-Uri/Others/stdin', 'utf8');
const values = input.split('\n');
const C = parseInt(values.shift());

const billChallenge = (loop) => {
    for (let i = 0; i < loop; i++) {
        const testCase = values.shift();
        
        if (testCase % 2 === 0) {
            console.log(0);
        } else {
            console.log(1);
        }
    }
};

billChallenge(C);
