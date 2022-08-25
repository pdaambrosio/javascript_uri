const input = require("fs").readFileSync(
  "./javascript_uri/Unknow/stdin",
  "utf8"
);
const values = input.split(/\s+/).map(Number);
const loop = values.shift();

const hackerMetalBand = (numX, numY) => {
  const greatestHits = {
    0: "PROXYCITY",
    1: "P.Y.N.G.",
    2: "DNSUEY!",
    3: "SERVERS",
    4: "HOST!",
    5: "CRIPTONIZE",
    6: "OFFLINE DAY",
    7: "SALT",
    8: "ANSWER!",
    9: "RAR?",
    10: "WIFI ANTENNAS",
  };
  return greatestHits[numX + numY];
};

for (let i = 0; i < loop; i++) {
  const [x, y] = values.splice(0, 2);
  console.log(hackerMetalBand(x, y));
}
