const input = require("fs").readFileSync(
  "./javascript_uri/Matrices/stdin",
  "utf8"
);
const values = input.split(/\s+/).map((value) => parseInt(value));

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

const cellWhithoutCheeseBread = (matrix, lines, columns) => {
  let count = 0;
  for (let i = 0; i < lines; i++) {
    for (let j = 0; j < columns; j++) {
      if (matrix[i][j] !== 9) {
        if (i > 0 && matrix[i - 1][j] === 9) {
          count++;
        }
        if (i < lines - 1 && matrix[i + 1][j] === 9) {
          count++;
        }
        if (j > 0 && matrix[i][j - 1] === 9) {
          count++;
        }
        if (j < columns - 1 && matrix[i][j + 1] === 9) {
          count++;
        }
        matrix[i][j] = count;
        count = 0;
      }
    }
  }
  return matrix;
};

while (values.length > 0) {
  const [nLines, nColumns] = values.splice(0, 2);
  const matrix = cheeseBreadSweeper(nLines, nColumns);
  cellWhithoutCheeseBread(matrix, nLines, nColumns);
  for (let i = 0; i < nLines; i++) {
    console.log(matrix[i].join(""));
  }
}
