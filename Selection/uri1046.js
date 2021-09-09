const input = require('fs').readFileSync('./JavaScript-Uri/Selection/stdin', 'utf8');
const [startTime, endTime] = input.split(' ').map(value => parseInt(value));

let duration = endTime - startTime;

if (duration <= 0) {
    duration += 24;
}

console.log(`O JOGO DUROU ${duration} HORA(S)`);
