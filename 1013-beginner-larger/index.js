const filePath = __dirname.split("\\").pop() + "/stdin";
const input = require("fs").readFileSync(filePath, "utf8");
const lines = input.split("\n");

const [A, B, C] = lines[0].split(" ").map(Number);

const higherNumber = Math.max(A, B, C);
const formatAnswer = `${higherNumber} eh o maior`;
const answer = formatAnswer;
console.log(answer);

// resolva maior número com reduce.
