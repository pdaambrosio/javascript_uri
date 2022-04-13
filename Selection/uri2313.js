const input = require("fs").readFileSync(
  "./javascript_uri/Selection/stdin",
  "utf8"
);
const [a, b, c] = input.split(" ").map(Number);

function whichTriangle(a, b, c) {
  const higherNumber = Math.max(a, b, c);
  const lowerNumber = Math.min(a, b, c);
  const isTriangle = a + b + c - higherNumber - lowerNumber;

  if (higherNumber >= lowerNumber + isTriangle) {
    return "Invalido";
  }

  if (a === b && b === c) {
    return "Valido-Equilatero";
  } else if (a === b || b === c || a === c) {
    return "Valido-Isoceles";
  } else {
    return "Valido-Escaleno";
  }
}

function isRectangle(a, b, c) {
  if (
    Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2) ||
    Math.pow(a, 2) + Math.pow(c, 2) === Math.pow(b, 2) ||
    Math.pow(b, 2) + Math.pow(c, 2) === Math.pow(a, 2)
  ) {
    return "Retangulo: S";
  }
  return "Retangulo: N";
}

const triangle = whichTriangle(a, b, c);
const rectangle = isRectangle(a, b, c);

if (triangle === "Invalido") {
  console.log(triangle);
} else {
  console.log(triangle);
  console.log(rectangle);
}
