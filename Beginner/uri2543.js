const input = require("fs").readFileSync(
  "./javascript_uri/Beginner/stdin",
  "utf-8"
);
const values = input.split(/\s+/).map((value) => parseInt(value));

const ufprGaming = (loop, studentId) => {
  let result = 0;
  for (let i = 0; i < loop; i++) {
    const gameplay = values.splice(0, 2);
    if (studentId === gameplay[0] && gameplay[1] === 0) {
      result += 1;
    }
  }
  return result;
};

while (values.length > 0) {
  const [loop, studentId] = values.splice(0, 2);

  if (isNaN(loop) || isNaN(studentId)) {
    break;
  }

  console.log(ufprGaming(loop, studentId));
}
