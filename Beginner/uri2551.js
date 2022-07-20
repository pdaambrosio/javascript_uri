const input = require("fs").readFileSync(
  "./javascript_uri/Beginner/stdin",
  "utf8"
);
const values = input.split("\n");

const newRecord = (loop) => {
  const result = [];
  let record = 0;
  for (let i = 1; i < loop + 1; i++) {
    const [trainingDuration, distance] = values
      .shift()
      .split(" ")
      .map((value) => parseInt(value));

    if (distance / trainingDuration > record) {
      result.push(i);
      record = distance / trainingDuration;
    }
  }
  return result;
};

while (values.length > 0) {
  const loop = parseInt(values.shift());
  const records = newRecord(loop);

  if (isNaN(loop)) {
    break;
  }

  for (let i of records) {
    console.log(i);
  }
}
