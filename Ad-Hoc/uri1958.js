const input = require('fs').readFileSync('./JavaScript-Uri/Ad-Hoc/stdin', 'utf8');
const lines = input.split('\n');
const value = lines.shift();

const scientificNotation = (value) => {
    let num = Number(value).toExponential(4);
    let signal = value[0];
    let seqs = num.split('e');

    if (seqs[1].length < 3) {
        seqs[1] = seqs[1].split('');
        seqs[1][0] += '0';
    }

    let seq3 = '';

    for (let seq of seqs[1]) {
        seq3 += seq;
    }

    if (Number(seqs[0]) >= 0 && signal !== '-') {
        console.log(`+${seqs[0]}E${seq3}`);
    } 
    else if (Number(seqs[0]) === 0 && signal === '-') {
        console.log(`-${seqs[0]}E${seq3}`);
    }
    else {
        console.log(`${seqs[0]}E${seq3}`);
    }
};

scientificNotation(value);
