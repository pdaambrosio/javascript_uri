const input = require("fs").readFileSync(
  "./javascript_uri/Beginner/stdin",
  "utf-8"
);
const values = input.split(/\s+/).map((value) => parseInt(value));

console.log(values);
