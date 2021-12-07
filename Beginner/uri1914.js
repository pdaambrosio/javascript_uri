const input = require('fs').readFileSync('./JavaScript-Uri/Beginner/stdin', 'utf8');
const values = input.split('\n');
const QT = parseInt(values.shift());

function whoIsNext(number) {
    for (let i = 0; i < number; i++) {
        const [player1, player1Choice, player2, player2Choice] = values.shift().split(' ');
        const [player1Number, player2Number] = values.shift().split(' ').map(value => parseInt(value));
        
        const sumPlayersNumber = player1Number + player2Number;
        const result = sumPlayersNumber % 2 === 0 ? 'PAR' : 'IMPAR';

        if (result === player1Choice) {
            console.log(player1);
        } else if (result === player2Choice) {
            console.log(player2);
        }

    }
}

whoIsNext(QT);
