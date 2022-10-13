const input = require("fs").readFileSync("./javascript_uri/Sets/stdin", "utf8");
const values = input.split("\n");
const result = new Set(values);

console.log(result.size);
