const input = require("fs").readFileSync(
  "./javascript_uri/Beginner/stdin",
  "utf8"
);
const values = input.split(/\s+/).map(Number);

function calcApi(subjects) {
  let sumC = 0;
  let calcResult = 0;
  for (let i = 0; i < subjects; i++) {
    const [subjectN, subjectC] = values.splice(0, 2);
    sumC += subjectC;
    calcResult += subjectN * subjectC;
  }
  const api = calcResult / (sumC * 100);
  return api.toFixed(4);
}

while (values.length > 0) {
  const numberOfSubjects = values.shift();
  const [validateSubjectN, validateSubjectC] = values.slice(0, 2);
  if (
    isNaN(numberOfSubjects) ||
    isNaN(validateSubjectN) ||
    isNaN(validateSubjectC)
  ) {
    break;
  }
  console.log(calcApi(numberOfSubjects));
}
