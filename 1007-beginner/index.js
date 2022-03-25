const input = require("fs").readFileSync("1007-beginner/stdin", "utf8");
const lines = input.split("\n");

const [a, b, c, d] = lines.map((n) => parseInt(n));

const difference = (a, b, c, d) => a * b - c * d;
const result = difference(a, b, c, d);
const formatAnswer = (result) => `DIFERENCE = ${result.toFixed(2)}`;
const answer = formatAnswer(result);
console.log(answer);
