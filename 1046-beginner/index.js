const filePath = __dirname.split("\\").pop() + "/stdin";
const input = require("fs").readFileSync(filePath, "utf8");
const lines = input.split("\n");
const [start, end] = lines[0].split(" ").map(Number);

if (start > end) {
  console.log(`O JOGO DUROU ${24 - (start - end)} HORA(S)`);
} else if (end > start) {
  console.log(`O JOGO DUROU ${end - start} HORA(S)`);
} else {
  console.log("O JOGO DUROU 24 HORA(S)");
}
