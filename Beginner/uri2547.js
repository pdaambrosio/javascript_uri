const input = require("fs").readFileSync(
  "./javascript_uri/Beginner/stdin",
  "utf8"
);
const lines = input.split("\n");

const rollerCoasterRestrictions = (
  numberGuest,
  minimumHeight,
  maximumHeight
) => {
  let guestsAllowed = 0;
  for (let i = 0; i < numberGuest; i++) {
    const guestHeight = parseInt(lines.shift());
    if (guestHeight >= minimumHeight && guestHeight <= maximumHeight) {
      guestsAllowed++;
    }
  }
  return guestsAllowed;
};

while (lines.length > 0) {
  const [numberGuest, minimumHeight, maximumHeight] = lines
    .shift()
    .split(" ")
    .map(Number);

  if (isNaN(numberGuest) || isNaN(minimumHeight) || isNaN(maximumHeight)) {
    break;
  }

  console.log(
    rollerCoasterRestrictions(numberGuest, minimumHeight, maximumHeight)
  );
}
