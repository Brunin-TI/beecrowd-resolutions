const filePath = __dirname.split("\\").pop() + "/stdin";
const input = require("fs").readFileSync(filePath, "utf8");
const lines = input.split("\n");

const values = lines.map(Number);
const filterPositiveNumbers = values.filter((value) => value > 0);
console.log(`${filterPositiveNumbers.length} valores positivos`);
const mediaPositiveNumbers =
  filterPositiveNumbers.reduce((acc, values) => acc + values, 0) /
  filterPositiveNumbers.length;
console.log(`${mediaPositiveNumbers.toFixed(1)}`);
