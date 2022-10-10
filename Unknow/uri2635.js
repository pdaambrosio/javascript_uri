const input = require("fs").readFileSync(
  "./javascript_uri/Unknow/stdin",
  "utf8"
);

const values = input.split(/\s+/);
const loopSearch = parseInt(values.shift());
const listSearch = values.splice(0, loopSearch);
const loopQueries = parseInt(values.shift());
const listQueries = values.splice(0, loopQueries);

const webSearch = (listSearch, listQueries) => {
  const result = [];
  for (let querie of listQueries) {
    let countSearch = 0;
    let lenSearch = 0;
    for (let search of listSearch) {
      if (querie === search.substring(0, querie.length)) {
        countSearch++;

        if (lenSearch < search.length) {
          lenSearch = search.length;
        }
      }
    }
    if (countSearch > 0) {
      result.push(`${countSearch} ${lenSearch}`);
    } else {
      result.push("-1");
    }
  }
  return result;
};

for (let result of webSearch(listSearch, listQueries)) {
  console.log(result);
}
