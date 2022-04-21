const input = require("fs").readFileSync(
  "./javascript_uri/Repetition/stdin",
  "utf8"
);
const index = parseInt(input);

function merryChristmaaas(number) {
  let prefix = "Feliz nat";
  for (let i = 0; i < number; i++) {
    prefix += "a";
  }
  return prefix + "l!";
}

console.log(merryChristmaaas(index));
