const input = require("fs").readFileSync(
  "./javascript_uri/Unknow/stdin",
  "utf8"
);

let values = input.split(/\s+/);

const rockPaperScissors = (player1, player2, player3) => {
  const dodo = "Os atributos dos monstros vao ser inteligencia, sabedoria...";
  const leo = "Iron Maiden's gonna get you, no matter how far!";
  const pepper = "Urano perdeu algo muito precioso...";
  const aTie = "Putz vei, o Leo ta demorando muito pra jogar...";

  switch (player1) {
    case "papel":
      if (player2 === "pedra" && player3 === "pedra") {
        return dodo;
      }
      break;
    case "pedra":
      if (player2 === "tesoura" && player3 === "tesoura") {
        return dodo;
      }
      break;
    case "tesoura":
      if (player2 === "papel" && player3 === "papel") {
        return dodo;
      }
      break;
  }

  switch (player2) {
    case "papel":
      if (player1 === "pedra" && player3 === "pedra") {
        return leo;
      }
      break;
    case "pedra":
      if (player1 === "tesoura" && player3 === "tesoura") {
        return leo;
      }
      break;
    case "tesoura":
      if (player1 === "papel" && player3 === "papel") {
        return leo;
      }
      break;
  }

  switch (player3) {
    case "papel":
      if (player1 === "pedra" && player2 === "pedra") {
        return pepper;
      }
      break;
    case "pedra":
      if (player1 === "tesoura" && player2 === "tesoura") {
        return pepper;
      }
      break;
    case "tesoura":
      if (player1 === "papel" && player2 === "papel") {
        return pepper;
      }
      break;
  }

  return aTie;
};

while (values.length > 0) {
  const [inputP1, inputP2, inputP3] = values.splice(0, 3);
  console.log(rockPaperScissors(inputP1, inputP2, inputP3));
}
