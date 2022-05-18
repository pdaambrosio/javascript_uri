const input = require("fs").readFileSync(
  "./javascript_uri/Unknow/stdin",
  "utf8"
);
const values = input.split(/\s+/g).map(Number);

const cityAnalogimon = (rows, columns) => {
  const matrix = [];
  const r1 = [];
  const r2 = [];

  for (let i = 0; i < rows; i++) {
    matrix.push(values.splice(0, columns));
  }

  for (let row = 0; row < rows; row++) {
    for (let column = 0; column < columns; column++) {
      if (matrix[row][column] === 2) {
        r1.push(row);
        r1.push(column);
      }
      if (matrix[row][column] === 1) {
        r2.push(row);
        r2.push(column);
      }
    }
  }

  const result = Math.abs(r1[0] - r2[0]) + Math.abs(r1[1] - r2[1]);
  return result;
};

while (values.length > 0) {
  const [rows, columns] = values.splice(0, 2);

  if (isNaN(rows) || isNaN(columns)) {
    break;
  }

  console.log(cityAnalogimon(rows, columns));
}
