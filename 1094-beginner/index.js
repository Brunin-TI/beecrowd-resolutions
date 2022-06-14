/* 
Maria acabou de iniciar seu curso de graduação na faculdade de medicina e precisa de sua ajuda para organizar
 os experimentos de um laboratório o qual ela é responsável. 
 Ela quer saber no final do ano, quantas cobaias foram utilizadas no laboratório 
 e o percentual de cada tipo de cobaia utilizada.

Este laboratório em especial utiliza três tipos de cobaias: sapos, ratos e coelhos.
Para obter estas informações, ela sabe exatamente o número de experimentos que foram realizados, o tipo de cobaia utilizada
e a quantidade de cobaias utilizadas em cada experimento.

Entrada
A primeira linha de entrada contém um valor inteiro N que indica os vários casos de teste que vem a seguir. 
Cada caso de teste contém um inteiro Quantia (1 ≤ Quantia ≤ 15) que representa a 
quantidade de cobaias utilizadas e um caractere Tipo ('C', 'R' ou 'S'), indicando o tipo de cobaia (R:Rato S:Sapo C:Coelho).

Saída
Apresente o total de cobaias utilizadas, 
o total de cada tipo de cobaia utilizada e 
o percentual de cada uma em relação ao total de 
cobaias utilizadas, sendo que o percentual deve ser apresentado com dois dígitos após o ponto.

*/
const filePath = __dirname.split("\\").pop() + "/stdin";
const input = require("fs").readFileSync(filePath, "utf8");
const lines = input.split("\n");

const adaptParams = (lines) => {
  const extractQuantity = (animalId) => {
    return lines
      .slice(1)
      .filter((line) => line.includes(animalId))
      .map((line) => Number(line.split(" ")[0]));
  };
  const rabbits = extractQuantity("C");
  const frogs = extractQuantity("S");
  const mice = extractQuantity("R");
  return { rabbits, frogs, mice };
};

const resolution = (params) => {
  const sumarize = (arr) => {
    return arr.reduce((acc, curr) => {
      return acc + curr;
    }, 0);
  };
  const rabbitsSum = sumarize(params.rabbits);
  const frogsSum = sumarize(params.frogs);
  const miceSum = sumarize(params.mice);
  const totalSum = rabbitsSum + frogsSum + miceSum;

  const percentage = (total, part) => {
    return (part / total) * 100;
  };
  const rabbitPercentage = percentage(totalSum, rabbitsSum);
  const mousePercentage = percentage(totalSum, miceSum);
  const frogPercentage = percentage(totalSum, frogsSum);
  return {
    rabbitsSum,
    frogsSum,
    miceSum,
    totalSum,
    rabbitPercentage,
    mousePercentage,
    frogPercentage,
  };
};
const formatAnswer = (answer) => {
  const logs = [
    `Total: ${answer.totalSum} cobaias`,
    `Total de coelhos: ${answer.rabbitsSum}`,
    `Total de ratos: ${answer.miceSum}`,
    `Total de sapos: ${answer.frogsSum}`,
    `Percentual de coelhos: ${answer.rabbitPercentage.toFixed(2)} %`,
    `Percentual de ratos: ${answer.mousePercentage.toFixed(2)} %`,
    `Percentual de sapos: ${answer.frogPercentage.toFixed(2)} %`,
  ];
  return logs.join("\n");
};
console.log(formatAnswer(resolution(adaptParams(lines))));
