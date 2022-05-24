const filePath = __dirname.split("\\").pop() + "/stdin";
const input = require("fs").readFileSync(filePath, "utf8");
const lines = input.split("\n");
const value = lines.shift();
for (i = 0; i <= value; i++) {
  if (i % 2 == 1) {
    console.log(i);
  }
}
