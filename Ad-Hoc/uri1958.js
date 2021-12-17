const input = require('fs').readFileSync('./JavaScript-Uri/Ad-Hoc/stdin', 'utf8');
const lines = input.split('\n');
// const value = lines.shift();

const scientificNotation = (value) => {
    let num = Number(value).toExponential(4);
    let signal = value[0];
    let seqs = num.split('e');

    if (seqs[1].length < 3) {
        seqs[1] = '0';
    }

    // console.log()

    if (Number(seqs[0]) >= 0 && signal !== '-') {
        console.log(`+${seqs[0]}E${seqs[1]}`);
    } 
    else if (Number(seqs[0]) === 0 && signal === '-') {
        console.log(`-${seqs[0]}E${seqs[1]}`);
    }
    else {
        console.log(`${seqs[0]}E${seqs[1]}`);
    }
};

// scientificNotation(value);

for (let n of lines) {
    scientificNotation(n);
}
