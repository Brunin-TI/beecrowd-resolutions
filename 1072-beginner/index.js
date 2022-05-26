const filePath = __dirname.split("\\").pop() + "/stdin";
const input = require("fs").readFileSync(filePath, "utf8");
const lines = input.split("\n");

const numbers = lines.filter(Boolean).map(Number).slice(1);

const inRange = (number) => number >= 10 && number <= 20;
const inside = numbers.filter(inRange).length;
const outside = numbers.length - inside;
console.log(`${inside} in`);
console.log(`${outside} out`);
