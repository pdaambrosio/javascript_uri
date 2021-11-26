const input = require('fs').readFileSync('./JavaScript-Uri/Selection/stdin', 'utf8');
const values = input.split('\n');
const numberOfPlayers = parseInt(values.shift());

for (let number = 1; number < (numberOfPlayers + 1); number++) {
    const [player1, player2] = values.shift().split(' ');

    if (player1 === player2) {
        console.log(`Caso #${number}: De novo!`);
    }
    else if (player1 === 'pedra') {
        if (player2 === 'tesoura' || player2 === 'lagarto') {
            console.log(`Caso #${number}: Bazinga!`);
        } else {
            console.log(`Caso #${number}: Raj trapaceou!`);
        } 
    }
    else if (player1 === 'papel') {
        if (player2 === 'pedra' || player2 === 'Spock') {
            console.log(`Caso #${number}: Bazinga!`);
        } else {
            console.log(`Caso #${number}: Raj trapaceou!`);
        }
    }
    else if (player1 === 'tesoura') {
        if (player2 === 'lagarto' || player2 === 'papel') {
            console.log(`Caso #${number}: Bazinga!`);
        } else {
            console.log(`Caso #${number}: Raj trapaceou!`);
        }
    }
    else if (player1 === 'lagarto') {
        if (player2 === 'Spock' || player2 === 'papel') {
            console.log(`Caso #${number}: Bazinga!`);
        } else {
            console.log(`Caso #${number}: Raj trapaceou!`);
        }
    }
    else if (player1 === 'Spock') {
        if (player2 === 'tesoura' || player2 === 'pedra') {
            console.log(`Caso #${number}: Bazinga!`);
        } else {
            console.log(`Caso #${number}: Raj trapaceou!`);
        }
    }
}
