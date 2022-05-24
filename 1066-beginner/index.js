const filePath = __dirname.split("\\").pop() + "/stdin";
const input = require("fs").readFileSync(filePath, "utf8");
const lines = input.split("\n");

const values = lines.map(Number).slice(0, 5);
const filterPairNumbers = values.filter((value) => value % 2 === 0);
const filterOddNumbers = values.filter((value) => value % 2 !== 0);
const filterPositiveNumbers = values.filter((value) => value > 0);
const filterNegativeNumbers = values.filter((value) => value < 0);
console.log(`${filterPairNumbers.length} valor(es) par(es)`);
console.log(`${filterOddNumbers.length} valor(es) impar(es)`);
console.log(`${filterPositiveNumbers.length} valor(es) positivo(s)`);
console.log(`${filterNegativeNumbers.length} valor(es) negativo(s)`);
