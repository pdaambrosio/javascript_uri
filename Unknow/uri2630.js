const input = require("fs").readFileSync(
  "./javascript_uri/Unknow/stdin",
  "utf8"
);
const values = input.split(/\s+/);
const loop = values.shift();

function greyScale(conversion, r, g, b) {
  let result = 0;
  switch (conversion) {
    case "eye":
      result = parseInt(r * 0.3 + g * 0.59 + b * 0.11);
      break;
    case "mean":
      result = parseInt((r + g + b) / 3);
      break;
    case "min":
      result = Math.min(r, g, b);
      break;
    case "max":
      result = Math.max(r, g, b);
      break;
  }
  return result;
}

for (let i = 0; i < loop; i++) {
  const conversion = values.shift();
  const [inputR, inputG, inputB] = values.splice(0, 3).map(Number);
  console.log(
    `Caso #${i + 1}: ${greyScale(conversion, inputR, inputG, inputB)}`
  );
}
