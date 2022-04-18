const input = require("fs").readFileSync(
  "./javascript_uri/Unknow/stdin",
  "utf8"
);
const values = input.split("\n").map(Number);

const littleDucks = (ducks) => {
  if (ducks === 0) {
    return ducks;
  }
  ducks = String(BigInt(ducks) - BigInt(1));
  return ducks;
};

while (values.length !== 0) {
  const duck = values.shift();
  if (duck === -1) {
    break;
  }
  console.log(littleDucks(duck));
}
