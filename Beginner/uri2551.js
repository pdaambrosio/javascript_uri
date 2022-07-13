const input = require("fs").readFileSync(
  "./javascript_uri/Beginner/stdin",
  "utf8"
);
const values = input.split(/\s+/).map((value) => parseInt(value));
const loop = values.shift();
const [trainingDuration, distance] = values.splice(0, 2);

