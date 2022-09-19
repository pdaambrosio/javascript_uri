const input = require("fs").readFileSync(
  "./javascript_uri/Unknow/stdin",
  "utf8"
);

const values = input.split(/\s+/);
console.log(values);
