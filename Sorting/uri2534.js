const input = require("fs").readFileSync(
  "./javascript_uri/Sorting/stdin",
  "utf8"
);
const values = input.split(/\s+/).map(Number);

const sortingQueries = (queries) => {
  const sorted = queries.sort(function (a, b) {
    return b - a;
  });
  return sorted;
};

const gradeCitizen = (position, sorterdQueries) => {
  return sorterdQueries[position - 1];
};

while (values.length > 0) {
  const [n, q] = values.splice(0, 2);

  if (isNaN(n) || isNaN(q)) {
    break;
  }

  const inputQueries = values.splice(0, n);
  const sortedQueries = sortingQueries(inputQueries);

  for (let i = 0; i < q; i++) {
    const position = values.shift();
    const result = gradeCitizen(position, sortedQueries);
    console.log(result);
  }
}
