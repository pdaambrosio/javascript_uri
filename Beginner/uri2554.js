const input = require("fs").readFileSync(
  "./javascript_uri/Beginner/stdin",
  "utf8"
);
const values = input.split(/\s+/);

const pizzaBeforeBh = (columns, lines) => {
  let result = "";
  for (let i = 0; i < lines; i++) {
    let [nDate, ...dPeoples] = values.splice(0, columns + 1);
    dPeoples = dPeoples.map((value) => parseInt(value));

    if (result.length === 0) {
      if (dPeoples.every((value) => value === 1)) {
        result = nDate;
      }
    }
  }

  return result ? result : "Pizza antes de FdI";
};

while (values.length > 0) {
  const [inputN, inputD] = values.splice(0, 2).map(Number);

  if (isNaN(inputN) || isNaN(inputD)) {
    break;
  }

  console.log(pizzaBeforeBh(inputN, inputD));
}
