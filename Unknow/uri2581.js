const input = require("fs").readFileSync(
  "./javascript_uri/Unknow/stdin",
  "utf8"
);

const values = input.split("\n");
const loop = values.shift();

function iAmToorg(inputNumber) {
  if (inputNumber) {
    return "I am Toorg!";
  }
}

for (let i = 0; i < loop; i++) {
  console.log(iAmToorg(values.shift()));
}
