const input = require('fs').readFileSync('./JavaScript-Uri/Ad-Hoc/stdin', 'utf8');
const lines = input.split('\n');
const value = lines.shift();

const scientificNotation = (value) => {
    let num = Number(value).toExponential(4);
    let signal = value[0];
    let [sequence1, sequence2] = num.split('e');

    if (sequence2.length < 3) {
        sequence2 = sequence2.split('');
        sequence2[0] += '0';
    }

    let sequence3 = '';

    for (let n of sequence2) {
        sequence3 += n;
    }

    if (Number(sequence1) >= 0 && signal !== '-') {
        console.log(`+${sequence1}E${sequence3}`);
    } 
    else if (Number(sequence1) === 0 && signal === '-') {
        console.log(`-${sequence1}E${sequence3}`);
    }
    else {
        console.log(`${sequence1}E${sequence3}`);
    }
};

scientificNotation(value);
