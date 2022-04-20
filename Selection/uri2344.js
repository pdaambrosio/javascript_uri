const input = require("fs").readFileSync(
  "./javascript_uri/Selection/stdin",
  "utf8"
);
const grade = parseInt(input);

const examGrades = (num) => {
  if (num === 0) {
    return "E";
  } else if (num < 36) {
    return "D";
  } else if (num < 61) {
    return "C";
  } else if (num < 86) {
    return "B";
  }
  return "A";
};

console.log(examGrades(grade));
