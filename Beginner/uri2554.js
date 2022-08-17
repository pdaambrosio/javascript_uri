const input = require("fs").readFileSync(
  "./javascript_uri/Beginner/stdin",
  "utf8"
);
const values = input.split(/\s+/);
const [inputN, inputD] = values.splice(0, 2).map(Number);

const pizzaBeforeBh = (columns, lines) => {
  let result = null;
  for (let i = 0; i < lines; i++) {
    let [nDate, ...dPeoples] = values.splice(0, columns + 1);
    dPeoples = dPeoples.map((value) => parseInt(value));

    if (dPeoples.every((value) => value === 1)) {
      result = nDate;
    }

    return result ? result : "Pizza antes de FdI";
  }
};

console.log(pizzaBeforeBh(inputN, inputD));
