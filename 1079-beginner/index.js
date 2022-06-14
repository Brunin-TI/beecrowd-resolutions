/* 
Leia 1 valor inteiro N, que representa o número de casos de teste que vem a seguir. 
Cada caso de teste consiste de 3 valores reais, cada um deles com uma casa decimal. 
Apresente a média ponderada para cada um destes conjuntos de 3 valores, sendo que o primeiro valor tem peso 2, o segundo valor tem peso 
3 e o terceiro valor tem peso 5.

Entrada
O arquivo de entrada contém um valor inteiro N na primeira linha. 
Cada N linha a seguir contém um caso de teste com três valores com uma casa decimal cada valor.

Saída
Para cada caso de teste, imprima a média ponderada dos 3 valores, conforme exemplo abaixo.
*/

const filePath = __dirname.split("\\").pop() + "/stdin";
const input = require("fs").readFileSync(filePath, "utf8");
const lines = input.split("\n");

const values = lines.map((line) => line.split(" ").map(Number)).slice(1);
const multiplyToWeight = (values) => {
  const weights = [2, 3, 5];
  const result = values.map((value, index) => value * weights[index]);
  return result;
};
const sumValues = (values) => values.reduce((acc, value) => acc + value);
const getFinalValue = (values) => {
  const total = sumValues(multiplyToWeight(values));
  const finalValue = total / 10;
  return finalValue;
};
const formatFinalValue = (finalValue) => `${finalValue.toFixed(1)}`;
const answer = values.map((value) => formatFinalValue(getFinalValue(value)));
console.log(answer.join("\n"));
