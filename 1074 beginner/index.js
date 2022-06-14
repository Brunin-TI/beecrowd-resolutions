/* 
Leia um valor inteiro N. Este valor será a quantidade de valores que serão lidos em seguida. 
Para cada valor lido, mostre uma mensagem em inglês 
dizendo se este valor lido é par (EVEN), ímpar (ODD), positivo (POSITIVE) ou negativo (NEGATIVE). 
No caso do valor ser igual a zero (0), embora a descrição correta seja (EVEN NULL), pois por definição zero é par, 
seu programa deverá imprimir apenas NULL.

Entrada
A primeira linha da entrada contém um valor inteiro N(N < 10000) que 
indica o número de casos de teste. Cada caso de teste a seguir é um valor inteiro X (-107 < X <107).

Saída
Para cada caso, imprima uma mensagem correspondente, de acordo com o exemplo abaixo. 
Todas as letras deverão ser maiúsculas e sempre deverá haver um espaço entre duas palavras impressas na mesma linha.
*/

const filePath = __dirname.split("\\").pop() + "/stdin";
const input = require("fs").readFileSync(filePath, "utf8");
const lines = input.split("\n");

const numbers = lines.filter(Boolean).map(Number).slice(1);

/**
 * @param {Number} number
 * @param {{isMatch: (Number)=> boolean, tag: string}[]} verifications
 */
const createNumberTagger = (verifications) => (n) => {
  return verifications.reduce(
    (acc, { isMatch, tag }) => (isMatch(n) ? [...acc, tag] : acc),
    []
  );
};

const getNumberTags = createNumberTagger([
  { isMatch: (n) => n !== 0 && n % 2 === 0, tag: "EVEN" },
  { isMatch: (n) => n % 2 !== 0, tag: "ODD" },
  { isMatch: (n) => n > 0, tag: "POSITIVE" },
  { isMatch: (n) => n === 0, tag: "NULL" },
  { isMatch: (n) => n < 0, tag: "NEGATIVE" },
]);

const formatAnswer = (numbersTags) => {
  return numbersTags.map((tags) => tags.join(" ")).join("\n");
};

console.log(formatAnswer(numbers.map(getNumberTags)));
