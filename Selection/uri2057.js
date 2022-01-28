const input = require('fs').readFileSync('./JavaScript-Uri/Selection/stdin', 'utf8');
const [S, T, F]  = input.split(' ').map(value => parseInt(value));

const mobileTimeZone = (departure, travelTime, timeZone) => {
    if (departure === 0) {
        departure = 24;
    }

    let arrivalTime = departure + travelTime + timeZone;

    if (arrivalTime > 24) {
        return arrivalTime - 24;
    } else if (arrivalTime === 24) {
        return 0;
    } return arrivalTime;
};

console.log(mobileTimeZone(S, T, F))
