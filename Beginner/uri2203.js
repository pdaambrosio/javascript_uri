const input = require("fs").readFileSync(
  "./javascript_uri/Beginner/stdin",
  "utf8"
);

const values = input.split(/\s+/).map((value) => parseInt(value));

const crowstormLol = (listValues) => {
  const [xf, yf, xi, yi, vi, r1, r2] = listValues.splice(0, 7);
  const distance = Math.sqrt(Math.pow(xf - xi, 2) + Math.pow(yf - yi, 2));

  if (r1 + r2 >= distance + 1.5 * vi) {
    return "Y";
  }
  return "N";
};

for (let i = 0; i < values.length; i += 7) {
  if (isNaN(values[i])) {
    break;
  }

  console.log(crowstormLol(values.slice(i, i + 7)));
}
