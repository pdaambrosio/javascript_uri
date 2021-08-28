const input = require('fs').readFileSync('./stdin', 'utf8');
const [N1, N2, N3, N4] = input.split(' ').map(num => parseFloat(num));
const N5 = input.split('\n').map(num => parseFloat(num));

const media = ((N1 * 2) + (N2 * 3) + (N3 * 4) + (N4 * 1)) / 10;
const exame = N5[1];

if (media >= 7) {
    console.log(`Media: ${media.toFixed(1)}\nAluno aprovado.`);
} else if (media < 5) {
    console.log(`Media: ${media.toFixed(1)}\nAluno reprovado.`);
} else if (media >= 5) {
    console.log(`Media: ${media.toFixed(1)}\nAluno em exame.\nNota do exame: ${exame.toFixed(1)}`);
    const mediaFinal = (media + exame) / 2;
    const avaliar = mediaFinal >= 5 ? 'Aluno aprovado.' : 'Aluno reprovado.';
    console.log(`${avaliar}\nMedia final: ${mediaFinal.toFixed(1)}`);
}