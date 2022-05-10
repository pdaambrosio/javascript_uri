const input = require("fs").readFileSync(
  "./javascript_uri/Unknow/stdin",
  "utf8"
);
const values = input.split("\n");

function desencryptCard(loop, keyOne, keyTwo) {
  const keyOneLower = keyOne.toLowerCase();
  const keyOneUpper = keyOne.toUpperCase();
  const keyTwoLower = keyTwo.toLowerCase();
  const keyTwoUpper = keyTwo.toUpperCase();
  let result = "";
  for (let i = 0; i < loop; i++) {
    const textEncrypt = values.shift();
    for (let caracter of textEncrypt) {
      if (keyOneLower.includes(caracter)) {
        result += keyTwoLower[keyOneLower.indexOf(caracter)];
      } else if (keyTwoLower.includes(caracter)) {
        result += keyOneLower[keyTwoLower.indexOf(caracter)];
      } else if (keyOneUpper.includes(caracter)) {
        result += keyTwoUpper[keyOneUpper.indexOf(caracter)];
      } else if (keyTwoUpper.includes(caracter)) {
        result += keyOneUpper[keyTwoUpper.indexOf(caracter)];
      } else {
        result += caracter;
      }
    }
    result += "\n";
  }
  return result;
}

do {
  const cn = values.shift().split(" ").map(Number);
  const keyOne = String(values.shift());
  const keyTwo = String(values.shift());
  if (isNaN(cn[0]) || isNaN(cn[1])) {
    break;
  }
  console.log(desencryptCard(cn[1], keyOne, keyTwo));
} while (values.length > 0);
