const input = require("fs").readFileSync(
  "./javascript_uri/Array/stdin",
  "utf8"
);

const values = input.split(/\s+/);
const loop = values.shift();

const percentage = (sum, value) => {
  return `${((value * 100) / sum).toFixed(2)} %`;
};

const sumValues = (loopNumber) => {
  let sumService = 0;
  let sumBlock = 0;
  let sumAttack = 0;
  let sumServiceSuccessful = 0;
  let sumBlockSuccessful = 0;
  let sumAttackSuccessful = 0;

  for (let i = 0; i < loopNumber; i++) {
    values.shift();
    const [serviceAttempts, blockAttempts, attackAttempts] = values
      .splice(0, 3)
      .map((value) => parseInt(value));

    const [serviceSuccessful, blockSuccessful, attackSuccessful] = values
      .splice(0, 3)
      .map((value) => parseInt(value));

    sumService += serviceAttempts;
    sumBlock += blockAttempts;
    sumAttack += attackAttempts;
    sumAttackSuccessful += attackSuccessful;
    sumBlockSuccessful += blockSuccessful;
    sumServiceSuccessful += serviceSuccessful;
  }
  return (
    `Pontos de Saque: ${percentage(sumService, sumServiceSuccessful)}.\n` +
    `Pontos de Bloqueio: ${percentage(sumBlock, sumBlockSuccessful)}.\n` +
    `Pontos de Ataque: ${percentage(sumAttack, sumAttackSuccessful)}.`
  );
};

console.log(sumValues(loop));
