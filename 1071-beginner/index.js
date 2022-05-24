const filePath = __dirname.split("\\").pop() + "/stdin";
const input = require("fs").readFileSync(filePath, "utf8");
const lines = input.split("\n");
const [x, y] = lines.map(Number);

let sum = 0;

if (x < y) {
  for (i = x + 1; i < y; i++) {
    if (i % 2 !== 0) {
      sum += i;
    }
  }
} else {
  for (i = y + 1; i < x; i++) {
    if (i % 2 !== 0) {
      sum += i;
    }
  }
}
console.log(sum);
