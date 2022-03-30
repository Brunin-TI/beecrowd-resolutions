const input = require("fs").readFileSync("1010-beginner/stdin", "utf8");
const lines = input.split("\n");

const piecesOne = lines
  .filter(Boolean)
  .map((line) => line.slice(1).split(" ").map(Number));

const orderPieces = piecesOne.reduce(
  (acc, [_, quantity, price]) => acc + quantity * price,
  0
);
const formatAnswer = `VALOR A PAGAR: R$ ${orderPieces.toFixed(2)}`;

console.log(formatAnswer);
