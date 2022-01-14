const input = require('fs').readFileSync('./JavaScript-Uri/Beginner/stdin', 'utf8');
// const values = input.split(/[:\n]/g).map(value => parseInt(value));
const values = input.split(/\s+/);

function sundayMorning(wokenUp) {
    const [hours, minutes] = wokenUp.split(':').map(value => parseInt(value));
    const hoursResult = (hours * 60) + (minutes - 420);
    return Math.max(0, hoursResult);  // hoursResult < 0 ? 0 : hoursResult
}

for (let i = 0; i < values.length; i++) {
    const testNum = parseInt(values[i]);

    if (isNaN(testNum)) {
        break;
    } else {
        console.log(`Atraso maximo: ${sundayMorning(values[i])}`);
    }
}
