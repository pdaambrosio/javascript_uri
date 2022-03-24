const input = require("fs").readFileSync(
  "./javascript_uri/Beginner/stdin",
  "utf8"
);
const values = input.split(/\s+/).map((value) => parseInt(value));

const raceOfSlugs = (speeds) => {
  let fastSlug = 0;
  for (let speed of speeds) {
    if (speed > fastSlug) {
      fastSlug = speed;
    }
  }
  return fastSlug;
};

while (values.length !== 0) {
  const slugsGroup = values.shift();
  const speedSlugs = values.splice(0, slugsGroup);

  if (isNaN(slugsGroup)) {
    break;
  }

  if (raceOfSlugs(speedSlugs) < 10) {
    console.log(1);
  } else if (raceOfSlugs(speedSlugs) < 20) {
    console.log(2);
  } else {
    console.log(3);
  }
}
