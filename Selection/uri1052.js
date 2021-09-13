const input = require('fs').readFileSync('./JavaScript-Uri/Selection/stdin', 'utf8');
const value = parseInt(input);

const months = {1: 'January', 2: 'February', 3: 'March', 4: 'April', 5: 'May', 6: 'June', 7: 'July', 8: 'August', 9: 'September', 10: 'October', 11: 'November', 12: 'December'};

for (let [idMonth, month] of Object.entries(months)) {
    if (value === parseInt(idMonth)) {
        console.log(month);
    }
}
