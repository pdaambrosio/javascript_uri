const input = require("fs").readFileSync(
  "./javascript_uri/Beginner/stdin",
  "utf8"
);
const values = input.split(/\s+/);
const [inputN, inputD] = values.splice(0, 2).map(Number);

const pizzaBeforeBh = (columns, lines) => {
  for (let i = 0; i < lines; i++) {
    let [nDate, ...dPeoples] = values.splice(0, columns + 1);
    dPeoples = dPeoples.map((value) => parseInt(value));
    console.log(nDate, dPeoples);
  }
};

pizzaBeforeBh(inputN, inputD);
