const input = require('fs').readFileSync('./JavaScript-Uri/Selection/stdin', 'utf8');
const [P, J1, J2, R, A] = input.split(' ').map(value => parseInt(value));

const oddEvenCheat = (choicePlayer1, numberJ1, numberJ2, cheatPlayer1, accusePlayer2) => {
    if (cheatPlayer1 === 1 && accusePlayer2 === 1) {
        return 'Jogador 2 ganha!';
    } else if (cheatPlayer1 === 1 || accusePlayer2 === 1) {
        return 'Jogador 1 ganha!';
    }

    const oddOrEven = (numberJ1 + numberJ2) % 2;

    if (oddOrEven === 0) {
        if (choicePlayer1 === 1) {
            return 'Jogador 1 ganha!';
        } else {
            return 'Jogador 2 ganha!';
        }
    } else if (oddOrEven === choicePlayer1) {
        return 'Jogador 2 ganha!';
    } else {
        return 'Jogador 1 ganha!';
    }
};

console.log(oddEvenCheat(P, J1, J2, R, A));
