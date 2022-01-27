const input = require('fs').readFileSync('./JavaScript-Uri/Unknow/stdin', 'utf8');
const values = input.split('\n');
let loop = parseInt(values.shift());

function rockPaperAirstrike(playel1, player2) {
    if (playel1 === 'ataque') {
        if (player2 === 'ataque') {
            return 'Aniquilacao mutua';
        } else {
            return 'Jogador 1 venceu';
        }
    }
    else if (playel1 === 'papel') {
        if (player2 === 'ataque' || player2 === 'pedra') {
            return 'Jogador 2 venceu';
        } else {
            return 'Ambos venceram';
        }
    }
    else if (playel1 === 'pedra') {
        if (player2 === 'papel') {
            return 'Jogador 1 venceu';
        }
        if (player2 === 'ataque') {
            return 'Jogador 2 venceu';
        }
        if (player2 === 'pedra') {
            return 'Sem ganhador';
        }
    }
}

while (loop > 0) {
    [playel1, player2] = values.splice(0, 2);
    console.log(rockPaperAirstrike(playel1, player2));
    loop -= 1;
}
