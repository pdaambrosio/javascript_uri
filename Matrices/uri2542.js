const input = require("fs").readFileSync(
  "./javascript_uri/Matrices/stdin",
  "utf8"
);
const values = input.split(/\s+/).map((value) => parseInt(value));

// Runtime error in the test case on URI Online Judge
function finalIuDiOh(
  player1,
  player2,
  chosenPlayer1,
  chosenPlayer2,
  randonAttribute
) {
  const playerScore1 = player1[chosenPlayer1 - 1][randonAttribute - 1];
  const playerScore2 = player2[chosenPlayer2 - 1][randonAttribute - 1];

  if (playerScore1 > playerScore2) {
    return "Marcos";
  } else if (playerScore2 > playerScore1) {
    return "Leonardo";
  }
  return "Empate";
}

while (values.length > 0) {
  values.shift();
  const m = values.shift();
  const l = values.shift();
  const marcos = [];
  const leonardo = [];

  if (isNaN(m) || isNaN(l)) {
    break;
  }

  for (let i = 0; i < m; i++) {
    marcos.push(values.splice(0, m + 1));
  }

  for (let i = 0; i < l; i++) {
    leonardo.push(values.splice(0, l + 1));
  }

  const [cm, cl] = values.splice(0, 2);
  const randon = values.shift();

  console.log(finalIuDiOh(marcos, leonardo, cm, cl, randon));
}
