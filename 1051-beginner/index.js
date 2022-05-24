const filePath = __dirname.split("\\").pop() + "/stdin";
const input = require("fs").readFileSync(filePath, "utf8");
const lines = input.split("\n");
const salary = lines[0];

if (salary >= 0 && salary <= 2000) {
  console.log("Isento");
} else if (salary > 2000 && salary <= 3000) {
  console.log(`R$ ${((salary - 2000) * 0.08).toFixed(2)}`);
} else if (salary > 3000 && salary <= 4500) {
  console.log(`R$ ${((salary - 3000) * 0.18 + 80).toFixed(2)}`);
} else {
  console.log(`R$ ${((salary - 4500) * 0.28 + 350).toFixed(2)}`);
}
