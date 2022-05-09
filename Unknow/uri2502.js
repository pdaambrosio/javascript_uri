const input = require("fs").readFileSync(
  "./javascript_uri/Unknow/stdin",
  "utf8"
);
const values = input.split("\n");
const cn = values.shift().split(" ").map(Number);
const keyOne = values.shift();
const keyTwo = values.shift();

console.log(cn);

function desencryptCard(loop, keyOne, keyTwo) {
  const keyOneLower = keyOne.toLowerCase();
  const keyOneUpper = keyOne.toUpperCase();
  const keyTwoLower = keyTwo.toLowerCase();
  const keyTwoUpper = keyTwo.toUpperCase();
  let result = "";
  for (let i = 0; i < loop; i++) {
    const textEncrypt = values.shift();
    for (let caracter of textEncrypt) {
      if (caracter in keyOneLower) {
        result += keyTwoLower[keyOneLower.indexOf(caracter)];
      } else if (caracter in keyTwoLower) {
        result += keyOneLower[keyTwoLower.indexOf(caracter)];
      } else if (caracter in keyOneUpper) {
        result += keyTwoUpper[keyOneUpper.indexOf(caracter)];
      } else if (caracter in keyTwoUpper) {
        result += keyOneUpper[keyTwoUpper.indexOf(caracter)];
      } else {
        result += caracter;
      }
    }
  }
  console.log(result);
}

desencryptCard(cn[1], keyOne, keyTwo);
