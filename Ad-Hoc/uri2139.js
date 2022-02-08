const input = require('fs').readFileSync('./JavaScript-Uri/Ad-Hoc/stdin', 'utf8');
const values = input.split(/\s+/);

const daysLeftUntilChristmas = (month, day) => {
    const months = {1: 31, 2: 29, 3: 31, 4: 30, 5: 31, 6: 30, 7: 31, 8: 31, 9: 30, 10: 31, 11: 30, 12: 25};
    let daysLeft = 0;
    
    if (month === 12) {
        if (day === 24) {
            return 'E vespera de natal!';
        } else if (day === 25) {
            return 'E natal!';
        } else if (day < 24) {
            return `Faltam ${25 - day} dias para o natal!`;
        }
    } else {
        for (const value of Object.values(months)) {
            while (month < 12) {
                daysLeft += value;
                month += 1;
            }
        } return `Faltam ${daysLeft} dias para o natal!`;
    }
};



console.log(daysLeftUntilChristmas(1, 5))
