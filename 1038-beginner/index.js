const filePath = __dirname.split("\\").pop() + "/stdin";
const input = require("fs").readFileSync(filePath, "utf8");
const lines = input.split("\n");

const [id, quantity] = lines[0].split(" ").map(Number);

const prices = [4.0, 4.5, 5.0, 2.0, 1.5];
const amountToPay = quantity * prices[id - 1];
const formatAnswer = `Total: R$ ${amountToPay.toFixed(2)}`;
console.log(formatAnswer);
