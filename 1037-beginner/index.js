const filePath = __dirname.split("\\").pop() + "/stdin";
const input = require("fs").readFileSync(filePath, "utf8");
const lines = input.split("\n");

const [value] = lines.map(Number);

const interval = (value) => {
  if (value >= 0 && value <= 25) {
    return console.log("Intervalo [0,25]");
  }
  if (value > 25 && value <= 50) {
    return console.log("Intervalo (25,50]");
  }
  if (value > 50 && value <= 75) {
    return console.log("Intervalo (50,75]");
  }
  if (value > 75 && value <= 100) {
    return console.log("Intervalo (75,100]");
  }
  return console.log("Fora de intervalo");
};
interval(value);
