const input = require("fs").readFileSync(
  "./javascript_uri/Beginner/stdin",
  "utf8"
);
const values = input.split(/\s/).map(Number);

function kageBunshinNoJutsu(shadowClones) {
  let result = 0;
  while (shadowClones > 1) {
    shadowClones = Math.floor(shadowClones / 2);
    result += 1;
  }
  return result;
}

while (values.length > 0) {
  const n = values.shift();

  if (isNaN(n) || n < 1) {
    break;
  }

  console.log(kageBunshinNoJutsu(n));
}
