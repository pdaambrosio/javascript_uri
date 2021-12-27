const input = require('fs').readFileSync('./JavaScript-Uri/Ad-Hoc/stdin', 'utf8');
const values = input.split(/\s+/).map(value => parseInt(value));

const gameCheck = (num1, num2, jump) => {
    if (Math.abs(num1 - num2) > jump) {
        return true;
    } else {
        return false;
    }
};

const winGame = () => {
    const [frogJump, pipes] = values.splice(0, 2);
    const pipesHeights = values;

    let game = false;

    for (let i = 0; i < (pipes - 1); i++) {
        game = gameCheck(pipesHeights[i], pipesHeights[i + 1], frogJump);
        if (game === true) {
            console.log('GAME OVER');
            break;
        }
    }

    if (game === false) {
        console.log('YOU WIN');
    }
};

winGame();
