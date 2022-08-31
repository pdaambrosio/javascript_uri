const { verify } = require("crypto");

const init = require("fs").readFileSync(
  "./javascript_uri/Unknow/stdin",
  "utf8"
);

const rockPaperScissors = (player1, player2, player3) => {
  const dodo = "Os atributos dos monstros vao ser inteligencia, sabedoria...";
  const leo = "Iron Maiden's gonna get you, no matter how far!";
  const pepper = "Urano perdeu algo muito precioso...";
  let result = "Putz vei, o Leo ta demorando muito pra jogar...";

  switch (player1) {
    case player2 === "pedra" && player3 === "pedra":
      result = dodo;
      break;
    case player2 === "papel" && player3 === "papel":
      result = dodo;
      break;
    case player2 === "tesoura" && player3 === "tesoura":
      result = dodo;
      break;
  }
  return result;
};
