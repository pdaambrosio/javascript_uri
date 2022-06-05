const input = require("fs").readFileSync(
  "./javascript_uri/Sorting/stdin",
  "utf8"
);
const values = input.split(/\s+/).map(Number);

console.log(values);
