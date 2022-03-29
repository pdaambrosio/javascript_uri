const input = require("fs").readFileSync(
  "./javascript_uri/Unknow/stdin",
  "utf8"
);
const values = input.split(/\s+/).map((value) => parseInt(value));
const hotDogs = (participant, dogs) => {
  return (participant / dogs).toFixed(2);
};

while (values.length !== 0) {
  const [M, P] = values.splice(0, 2);

  if (isNaN(M) || isNaN(P)) {
    break;
  }

  console.log(hotDogs(M, P));
}
