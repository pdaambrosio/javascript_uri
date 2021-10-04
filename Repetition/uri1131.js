const input = require('fs').readFileSync('./JavaScript-Uri/Repetition/stdin', 'utf8');
const values = input.split(/\s+/).map(value => parseInt(value));

let answerLoop = 0;
let countDeparture = 0;
let countDraws = 0;
let victoriesInter = 0;
let victoriesGremio = 0;

while (answerLoop !== 2) {
    countDeparture += 1;
    [interGoals, gremioGoals] = values.slice(0, 2).map(value => values.shift());
    if (interGoals > gremioGoals) {
        victoriesInter += 1;
    } else if (gremioGoals > interGoals) {
        victoriesGremio += 1;
    } else {
        countDraws += 1;
    }
    console.log('Novo grenal (1-sim 2-nao)');
    answerLoop = values.shift();
}

console.log(`${countDeparture} grenais`);
console.log(`Inter:${victoriesInter}`);
console.log(`Gremio:${victoriesGremio}`);
console.log(`Empates:${countDraws}`);

if (victoriesInter > victoriesGremio) {
    console.log('Inter venceu mais');
} else if (victoriesGremio > victoriesInter) {
    console.log('Gremio venceu mais');
}
