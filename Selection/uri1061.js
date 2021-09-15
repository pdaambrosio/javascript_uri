const input = require('fs').readFileSync('./JavaScript-Uri/Selection/stdin', 'utf8');
let [startDay, startHours, endDay, endHours] = input.split('\n');
let [sHour, sMinutes, sSeconds] = startHours.split(':').map(value => parseInt(value));
let [eHour, eMinutes, eSeconds] = endHours.split(':').map(value => parseInt(value));

startDay = parseInt(startDay.split(' ')[1]);
endDay = parseInt(endDay.split(' ')[1]);

let durationHours = ((eHour * 60) + eMinutes) - ((sHour * 60) + sMinutes);
let days = endDay - startDay;

if (durationHours <= 0) {
    durationHours += 24 * 60;
    days -= 1;
}

if (days < 0) {
    days = 0;
}

let hours = Math.floor(durationHours / 60);
let minutes = durationHours % 60;
let seconds = eSeconds - sSeconds;

if (seconds < 0) {
    seconds += 60;
    minutes -= 1;
}

console.log(`${days} dia(s)`);
console.log(`${hours} hora(s)`);
console.log(`${minutes} minuto(s)`);
console.log(`${seconds} segundo(s)`);
