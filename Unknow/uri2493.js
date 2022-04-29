const input = require("fs").readFileSync(
  "./javascript_uri/Unknow/stdin",
  "utf8"
);
const values = input.split("\n");

const operationsGame = (loop) => {
  const listAnwser = [];
  for (let i = 0; i < loop; i++) {
    const questionsGame = values.shift();
    const formatedQuestions = questionsGame.replace("=", " ").split(" ");
    const listQuestions = formatedQuestions.map((question) =>
      parseInt(question)
    );

    if (listQuestions[0] + listQuestions[1] === listQuestions[2]) {
      listAnwser.push("+");
    } else if (listQuestions[0] - listQuestions[1] === listQuestions[2]) {
      listAnwser.push("-");
    } else if (listQuestions[0] * listQuestions[1] === listQuestions[2]) {
      listAnwser.push("*");
    } else {
      listAnwser.push("I");
    }
  }
  return listAnwser;
};

const playersGame = (loop, listAnwser) => {
  const wrongAnwser = [];
  for (let i = 0; i < loop; i++) {
    const [name, question, answer] = values.shift().split(" ");

    if (answer !== listAnwser[question - 1]) {
      wrongAnwser.push(name);
    }
  }

  if (wrongAnwser.length === 0) {
    return "You Shall All Pass!";
  }

  if (wrongAnwser.length === loop) {
    return `None Shall Pass!`;
  }

  wrongAnwser.sort();
  return wrongAnwser.join(" ");
};

while (values.length > 0) {
  const loop = parseInt(values.shift());

  if (isNaN(loop)) {
    break;
  }

  const listQuestionsAnwser = operationsGame(loop);
  console.log(playersGame(loop, listQuestionsAnwser));
}
