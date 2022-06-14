/* 
Leia um valor inteiro N. Apresente todos os números entre 1 e 10000 que divididos por N dão resto igual a 2.

Entrada
A entrada contém um valor inteiro N (N < 10000).

Saída
Imprima todos valores que quando divididos por N dão resto = 2, um por linha.
*/

const filePath = __dirname.split("\\").pop() + "/stdin";
const input = require("fs").readFileSync(filePath, "utf8");
const lines = input.split("\n");

const number = lines[0];

const restOfDivision = (number) => (currentValue) =>
  currentValue % number === 2;

const createArray = (size) => Array.from({ length: size }, (_, key) => key + 1);
const filterNumbers = createArray(100).filter(restOfDivision(number));
const answer = filterNumbers.join("\n");
console.log(answer);
