const input = require('fs').readFileSync('./JavaScript-Uri/Selection/stdin', 'utf8');
const values = input.split(/\s+/).map(value => parseFloat(value));
const numberStudents = values.shift();

function highestScore(num) {
    let highScore = 0;
    let registation = 0;

    while (num !== 0) {
        [studentId, score] = values.splice(0, 2);
        
        if (score > highScore) {
            highScore = score;
            registation = studentId;
        }
        
        num -= 1;
    }

    if (highScore >= 8) {
        return registation;
    } else {
        return 'Minimum note not reached';
    }
}

console.log(highestScore(numberStudents));
