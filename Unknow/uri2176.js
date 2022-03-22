const input = require("fs").readFileSync(
  "./javascript_uri/Unknow/stdin",
  "utf8"
);

const parity = (bit) => {
  let extraBit = 0;
  for (let i of bit) {
    if (i === "1") {
      extraBit += 1;
    }
  }
  return bit + (extraBit % 2).toString();
};

console.log(parity(input));
