const filePath = __dirname.split("\\").pop() + "/stdin";
const input = require("fs").readFileSync(filePath, "utf8");
const lines = input.split("\n");

const [price] = lines.map(Number);
const notes = [100.0, 50.0, 20.0, 10.0, 5.0, 2.0];
const coins = [1, 0.5, 0.25, 0.1, 0.05, 0.01];
let currentPrice = price;
const result = notes.reduce((acc, note) => {
  const numberOfNotes = Math.floor(currentPrice / note);
  currentPrice = Number((currentPrice % note).toFixed(2));
  acc.push(`${numberOfNotes} nota(s) de R$ ${note.toFixed(2)}`);
  return acc;
}, []);
const resultCoins = coins.reduce((acc, coin) => {
  const numberOfCoins = Math.floor(currentPrice / coin);
  currentPrice = Number((currentPrice % coin).toFixed(2));
  acc.push(`${numberOfCoins} moeda(s) de R$ ${coin.toFixed(2)}`);
  return acc;
}, []);
console.log("NOTAS:");
console.log(result.join("\n"));
console.log("MOEDAS:");
console.log(resultCoins.join("\n"));
