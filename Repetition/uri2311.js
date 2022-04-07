const input = require("fs").readFileSync(
  "./javascript_uri/Repetition/stdin",
  "utf8"
);

const values = input.split(/\s+/);
let loop = values.shift();

function divingCompetition(name, difficulty, scores) {
  const sortedScores = scores.sort().splice(1, 5);
  const sumScores = sortedScores.reduce((a, b) => a + b);
  const finalScore = sumScores * difficulty;
  return `${name} ${finalScore.toFixed(2)}`;
}

while (loop > 0) {
  const name = values.shift();
  const difficulty = parseFloat(values.shift());
  const scores = values.splice(0, 7).map(Number);
  console.log(divingCompetition(name, difficulty, scores));
  loop--;
}
