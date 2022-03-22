const input = require("fs").readFileSync(
  "./javascript_uri/Unknow/stdin",
  "utf8"
);
const values = input.split(/\s+/).map((value) => parseInt(value));

const event = (xp) => {
  const result = [];

  while (xp.length !== 0) {
    const [N, M] = xp.splice(0, 2);
    if (N === 0 && M === 0) {
      break;
    }
    result.push(N * M);
  }
  return result;
};

for (let i of event(values)) {
  console.log(i);
}
