const input = require('fs').readFileSync('./JavaScript-Uri/Unknow/stdin', 'utf8');
const values = input.split(/\s+/).map(value => parseInt(value));
const teaType = values.shift();
const contestantAnswer = values;

const identifyngTea = (tea, answer) => {
    return answer.reduce((a, b) => (b === tea ? a + 1 : a), 0);
};

console.log(identifyngTea(teaType, contestantAnswer))
