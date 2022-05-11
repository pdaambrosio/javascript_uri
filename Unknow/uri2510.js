const input = require("fs").readFileSync(
  "./javascript_uri/Unknow/stdin",
  "utf8"
);
const values = input.split("\n");
const t = parseInt(values.shift());

const batmain = (villain) => {
  if (villain === "Superman") {
    return "Why So Serious?";
  }
  return "Y";
};

for (let i = 0; i < t; i++) {
  const villain = values[i];
  console.log(batmain(villain));
}
