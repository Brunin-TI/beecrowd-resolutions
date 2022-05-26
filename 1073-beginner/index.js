const filePath = __dirname.split("\\").pop() + "/stdin";
const input = require("fs").readFileSync(filePath, "utf8");
const lines = input.split("\n");

const number = lines[0].map(Number);

const getEvenNumber = (n) => {
  const array = Array.from({ length: n }, (_, i) => i + 1);
  const evenNumber = array.filter((n) => n % 2 === 0);
  return evenNumber;
};

const evenNumbers = getEvenNumber(number);
const evenNumbersMap = evenNumbers.reduce((acc, n) => {
  acc[n] = n * n;
  return acc;
}, {});
const answer = Object.keys(evenNumbersMap)
  .map((key) => {
    return `${key}^2 = ${evenNumbersMap[key]}`;
  })
  .join("\n");
console.log(answer);
