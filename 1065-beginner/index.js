const filePath = __dirname.split("\\").pop() + "/stdin";
const input = require("fs").readFileSync(filePath, "utf8");
const lines = input.split("\n");

const values = lines.map((value) => parseInt(value));
const filterPairNumbers = values.filter((value) => value % 2 === 0);
console.log(`${filterPairNumbers.length} valores pares`);
