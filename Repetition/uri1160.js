const input = require('fs').readFileSync('./JavaScript-Uri/Repetition/stdin', 'utf8');
const values = input.split(/\s+/).map(value => parseFloat(value));
const loop = values.shift();

for (let i = 0; i < loop; i++) {
    let [PA, PB, G1, G2] = values.splice(0, 4);
    let years = 0;
    while (PA <= PB) {
        years += 1;
        PA += parseInt(PA * (G1 / 100));
        PB += parseInt(PB * (G2 / 100));
        if (years > 100) {
            break;
        }
    }
    if (years > 100) {
        console.log('Mais de 1 seculo.');
    } else {
        console.log(`${years} anos.`);
    }
}
