const input = require('fs').readFileSync('./JavaScript-Uri/Ad-Hoc/stdin', 'utf8');
const values = input.split(/\s+/).map(value => parseInt(value));

const daysLeftUntilChristmas = (month, day) => {
    const months = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 25];
    let daysLeft = 0;
    
    if (month === 12) {
        if (day === 24) {
            return 'E vespera de natal!';
        } else if (day === 25) {
            return 'E natal!';
        } else if (day > 24) {
            return 'Ja passou!';
        } else if (day < 24) {
            return `Faltam ${25 - day} dias para o natal!`;
        }
    } else {
        for (let i = 0; i < months.length; i++) {
            if (month <= 12) {
                daysLeft += months[month - 1];
                month += 1;
            }
        } return `Faltam ${daysLeft - day} dias para o natal!`;
    }
};


while (values.length !== 0) {
    const [M, D] = values.splice(0, 2);
    if (isNaN(M) || isNaN(D)) {
        break;
    } else {
        console.log(daysLeftUntilChristmas(M, D));
    }
}
