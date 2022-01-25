const input = require('fs').readFileSync('./JavaScript-Uri/Mathematics/stdin', 'utf8');
const values = input.split('\n').map(value => parseFloat(value));

function roundDown(num, length) { 
    var number = Math.floor(num * Math.pow(10, length)) / Math.pow(10, length);
    return number;
}

const honeyReservoir = (height, area) => {
    const rArea = area / 2;
    area = 3.14 * rArea * rArea;
    height = height / (rArea * rArea * 3.14);

    // return `ALTURA = ${height.toFixed(2)}\nAREA = ${area.toFixed(2)}`;
    return `ALTURA = ${height.toFixed(2)}\nAREA = ${roundDown(area, 2)}`;
};

while (values.length != 0) {
    const [V, D] = values.splice(0, 2);
    if (isNaN(V) || isNaN(D)) {
        break;
    } else {
        console.log(honeyReservoir(V, D));
    }
}


// Wrong answer. Because "toFixed" rounds the return value. Under review.
// Example
// Wrong answer: AREA = 3272.88
// Correct answer: AREA = 3272.89
