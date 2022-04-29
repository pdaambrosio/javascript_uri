const input = require("fs").readFileSync(
  "./javascript_uri/Unknow/stdin",
  "utf8"
);
const values = input.split("\n");
const loop = parseInt(values.shift());

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
  console.log(listAnwser);
};

operationsGame(loop);

