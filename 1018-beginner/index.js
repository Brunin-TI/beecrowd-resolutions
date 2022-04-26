const filePath = __dirname.split("\\").pop() + "/stdin";
const input = require("fs").readFileSync(filePath, "utf8");
const lines = input.split("\n");

const [price] = lines.map(Number);

const notes = [100, 50, 20, 10, 5, 2, 1];
let currentPrice = price;
const result = notes.reduce((acc, note) => {
  const numberOfNotes = Math.floor(currentPrice / note);
  currentPrice = currentPrice % note;
  acc.push(`${numberOfNotes} nota(s) de R$ ${note},00`);
  return acc;
}, []);
console.log(price);
console.log(result.join("\n"));
