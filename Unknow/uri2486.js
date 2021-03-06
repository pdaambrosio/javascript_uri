const input = require("fs").readFileSync(
  "./javascript_uri/Unknow/stdin",
  "utf8"
);
const values = input.split("\n");

const calcVitamin = (amount, item) => {
  const foodList = {
    "suco de laranja": 120,
    "morango fresco": 85,
    "mamao": 85,
    "goiaba vermelha": 70,
    "manga": 56,
    "laranja": 50,
    "brocolis": 34,
  };
  let vitamins = foodList[item] * amount;
  return vitamins;
};

const calcDailyIntake = (vitaminIntake) => {
  if (vitaminIntake < 110) {
    return `Mais ${110 - vitaminIntake} mg`;
  }

  if (vitaminIntake > 130) {
    return `Menos ${vitaminIntake - 130} mg`;
  }

  return `${vitaminIntake} mg`;
};

while (values.length > 0) {
  const loop = Number(values.shift());
  let result = 0;

  if (loop === 0) {
    break;
  }

  for (let i = 0; i < loop; i++) {
    const intake = values.shift().split(" ");
    const amount = parseInt(intake.shift());
    const item = intake.join(" ");
    result += calcVitamin(amount, item);
  }
  console.log(calcDailyIntake(result));
}
