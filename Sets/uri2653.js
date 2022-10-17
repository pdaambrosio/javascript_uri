const input = require("fs").readFileSync("./javascript_uri/Sets/stdin", "utf8");
const values = input.split("\n");

function typesJewelry(jewelry) {
  const types = new Set(jewelry);
  if (jewelry.includes("")) {
    types.delete("");
  }
  return types.size;
}

console.log(typesJewelry(values));
