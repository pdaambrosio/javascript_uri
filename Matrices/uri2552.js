const input = require("fs").readFileSync(
  "./javascript_uri/Matrices/stdin",
  "utf8"
);
const values = input.split(/\s+/).map((value) => parseInt(value));
const [nLines, nColumns] = values.splice(0, 2);

const cheeseBreadSweeper = (lines, columns) => {
  const matrix = [];
  for (let i = 0; i < lines; i++) {
    matrix[i] = values.splice(0, columns);
  }

  for (let i = 0; i < lines; i++) {
    for (let j = 0; j < columns; j++) {
      if (matrix[i][j] === 1) {
        matrix[i][j] = 9;
      }
    }
  }

  return matrix;
};

console.log(cheeseBreadSweeper(nLines, nColumns));
