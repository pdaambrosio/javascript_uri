const input = require('fs').readFileSync('./JavaScript-Uri/Ad-Hoc/stdin', 'utf8');
const [A, B, C] = input.split(' ').map(number => parseInt(number));

const winterIsComming = (day1, day2, day3) => {
    const climateTendencies1 = day2 - day1;
    const climateTendencies2 = day3 - day2;

    if (climateTendencies2 > climateTendencies1) {
        console.log(':)');
    } else if (climateTendencies2 < climateTendencies1) {
        console.log(':(');
    } else {
        if (climateTendencies1 <= 0) {
            console.log(':(');
        } else {
            console.log(':)');
        }
    }
};

winterIsComming(A, B, C);
