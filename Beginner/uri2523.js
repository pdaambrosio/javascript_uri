const input = require("fs").readFileSync(
  "./javascript_uri/Beginner/stdin",
  "utf8"
);
const values = input.split("\n");

const willsMessage = (alphabet, bulbs, bulbsOn) => {
  let result = "";
  if (bulbs === bulbsOn.length) {
    for (let num of bulbsOn) {
      for (let i = 0; i < alphabet.length; i++) {
        if (i + 1 === num) {
          result += alphabet[i];
        }
      }
    }
  }
  return result;
};

while (values.length > 0) {
  const inputAlphabet = values.shift();
  const inputBulbs = parseInt(values.shift());

  if (isNaN(inputBulbs)) {
    break;
  }

  const inputBulbsOn = values.shift().split(" ").map(Number);
  console.log(willsMessage(inputAlphabet, inputBulbs, inputBulbsOn));
}
