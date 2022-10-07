const input = require("fs").readFileSync(
  "./javascript_uri/Unknow/stdin",
  "utf8"
);

const values = input.split(/\s+/);
const loopSearch = parseInt(values.shift());
const listSearch = values.splice(0, loopSearch);
const loopQueries = parseInt(values.shift());
const listQueries = values.splice(0, loopQueries);

console.log(loopSearch, listSearch, loopQueries, listQueries);
