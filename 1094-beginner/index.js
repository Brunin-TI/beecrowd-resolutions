const filePath = __dirname.split("\\").pop() + "/stdin";
const input = require("fs").readFileSync(filePath, "utf8");
const lines = input.split("\n");

const [...values] = lines;
const totalGuineaPigs = values
  .map((value) => Number(value.slice(0, -1)))
  .reduce((acc, value) => acc + value, 0);
const totalOfRabbits = values
  .filter((value) => {
    return value.slice(-1) === "C";
  })
  .map((value) => Number(value.slice(0, -1)))
  .reduce((acc, value) => acc + value, 0);
const totalOfMice = values
  .filter((value) => {
    return value.slice(-1) === "R";
  })
  .map((value) => Number(value.slice(0, -1)))
  .reduce((acc, value) => acc + value, 0);
const totalOfFrogs = values
  .filter((value) => {
    return value.slice(-1) === "S";
  })
  .map((value) => Number(value.slice(0, -1)))
  .reduce((acc, value) => acc + value, 0);
const calculatePercentage = (total, totalOfAnimals) => {
  return (totalOfAnimals * 100) / total;
};

console.log(`Total: ${totalGuineaPigs} cobaias`);
console.log(`Total de coelhos: ${totalOfRabbits}`);
console.log(`Total de ratos: ${totalOfMice}`);
console.log(`Total de sapos: ${totalOfFrogs}`);
console.log(
  `Percentual de coelhos: ${calculatePercentage(
    totalGuineaPigs,
    totalOfRabbits
  ).toFixed(2)} %`
);
console.log(
  `Percentual de ratos: ${calculatePercentage(
    totalGuineaPigs,
    totalOfMice
  ).toFixed(2)} %`
);
console.log(
  `Percentual de sapos: ${calculatePercentage(
    totalGuineaPigs,
    totalOfFrogs
  ).toFixed(2)} %`
);
