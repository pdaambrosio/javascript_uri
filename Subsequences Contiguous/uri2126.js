const input = require('fs').readFileSync('./JavaScript-Uri/Subsequences Contiguous/stdin', 'utf8');
const values = input.split('\n');

const searchingSubsequences = (value, sequence) => {
    const amountOfValues = sequence.split(value).length - 1;

    if (amountOfValues === 0) {
        return 'Nao existe subsequencia\n';
    } else {
        const position = sequence.lastIndexOf(value);
        return `Qtd.Subsequencias: ${amountOfValues}\nPos: ${position + 1}\n`;
    }
};

let countCases = 1;
while (values.length !== 0) {
    const [N1, N2] = values.splice(0, 2);
    if (isNaN(N1) || isNaN(N2)) {
        break;
    } else {
        console.log(`Caso #${countCases}:`);
        console.log(searchingSubsequences(N1, N2));
    }
    countCases += 1;
}
