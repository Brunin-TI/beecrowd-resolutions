/* 
Leia 1 valor inteiro N (2 < N < 1000). A seguir, mostre a tabuada de N:      
1 x N = N      2 x N = 2N        ...       10 x N = 10N

Entrada
A entrada contém um valor inteiro N (2 < N < 1000).

Saída
Imprima a tabuada de N, conforme o exemplo fornecido.
*/
const filePath = __dirname.split("\\").pop() + "/stdin";
const input = require("fs").readFileSync(filePath, "utf8");
const lines = input.split("\n");

const multiplier = lines[0];

const calculate = (multiplier) => (number) =>
  `${number} x ${multiplier} = ${multiplier * number}`;
const createArray = (length) =>
  Array.from({ length: length }, (_, key) => key + 1);
const filterResults = createArray(10).map(calculate(multiplier));
const answer = filterResults.join("\n");
console.log(answer);
