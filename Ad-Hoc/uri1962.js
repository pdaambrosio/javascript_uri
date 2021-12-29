const input = require('fs').readFileSync('./JavaScript-Uri/Ad-Hoc/stdin', 'utf8')
const values = input.split('\n').map(value => parseInt(value));
const loop = values.shift();

const tenThousandYears = (years) => {
    if (years <= 2014) {
        return `${2015 - years} D.C.`
    } else {
        return `${years - 2014} A.C.`
    }
};

for (let i = 0; i < loop; i++) {
    const yearPast = values.shift();
    console.log(tenThousandYears(yearPast))
}
