/* 
Leia 100 valores inteiros. Apresente então o maior valor lido e a posição dentre os 100 valores lidos.

Entrada
O arquivo de entrada contém 100 números inteiros, positivos e distintos.

Saída
Apresente o maior valor lido e a posição de entrada, conforme exemplo abaixo.
*/

const filePath = __dirname.split("\\").pop() + "/stdin";
const input = require("fs").readFileSync(filePath, "utf8");
const lines = input.split("\n");
const values = lines.map(Number).filter(Boolean);
console.log(values);
const largestValue = Math.max(...values);
const positionLargeValue = values.indexOf(largestValue) + 1;
console.log(largestValue);
console.log(positionLargeValue);
