const input = require('fs').readFileSync('./JavaScript-Uri/Unknow/stdin', 'utf8');
const values = input.split(/\s+/).map(value => parseInt(value));
const loop = values.shift();

const twoDigits = (number) => {
    return number.toString().padStart(2, '0');
};

const alredyTookCandle = (hour, minute, port) => {
    const ocurrenceRecorded = port === 1 ? 'A porta abriu!' : 'A porta fechou!';
    return `${twoDigits(hour)}:${twoDigits(minute)} - ${ocurrenceRecorded}`;
};


for (let i =0; i < loop; i++) {
    const [M, N, O] = values.splice(0, 3);
    console.log(alredyTookCandle(M, N, O));
}
