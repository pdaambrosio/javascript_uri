const input = require('fs').readFileSync('./JavaScript-Uri/Selection/stdin', 'utf8');
const [startHour, startMinute, endHour, endMinute] = input.split(' ').map(value => parseFloat(value));

let duration = ((endHour * 60) + endMinute) - ((startHour * 60) + startMinute);

if (duration <= 0) {
    duration += 24 * 60;
}

let hour = Math.floor(duration / 60);
let minute = duration % 60;

console.log(`O JOGO DUROU ${hour} HORA(S) E ${minute} MINUTO(S)`);
