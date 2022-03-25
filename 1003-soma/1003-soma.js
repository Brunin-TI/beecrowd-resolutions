const input = require("fs").readFileSync("1003-soma/stdin", "utf8");
const lines = input.split("\n");

const [a, b] = lines.map((n) => parseInt(n)); // input

const resolution2 = (a, b) => {
  const sum = (x) => {
    const sum2 = (y) => x + y;
    return sum2;
  };
  const sumA = sum(a);
  const result = sumA(b);
  const formatAnswer = (result) => `SOMA = ${result}`;
  const answer = formatAnswer(result);
  return answer;
};

const resolution1 = (a, b) => {
  const sum = (a, b) => a + b;
  const result = sum(a, b);
  const formatAnswer = (result) => `SOMA = ${result}`;
  const answer = formatAnswer(result);
  return answer;
};
// const result = sum(a, b);

console.log(resolution2(30, 40)); // hight order function
console.log(resolution1(a, b)); //
