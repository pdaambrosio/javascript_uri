const input = require("fs").readFileSync(
  "./javascript_uri/Unknow/stdin",
  "utf8"
);
const [A, B, C] = input.split(" ").map((value) => parseInt(value));

function walkingInTime(A, B, C) {
  if (A - B === 0 || A - C === 0 || B - C === 0) {
    return "S";
  } else if (A + B - C === 0 || B - C + A === 0 || C - A + B === 0) {
    return "S";
  } else if (A - B - C === 0 || B - A - C === 0 || C - A - B === 0) {
    return "S";
  }
  return "N";
}

console.log(walkingInTime(A, B, C));
