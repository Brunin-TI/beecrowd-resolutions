const filePath = __dirname.split("\\").pop() + "/stdin";
const input = require("fs").readFileSync(filePath, "utf8");
const lines = input.split("\n");

const [A, B, C] = lines[0].split(" ").map(Number);

const calculateBaskhara = (A, B, C) => {
  const delta = Math.pow(B, 2) - 4 * A * C;
  if (delta < 0 || A === 0) throw "A está sendo 0";
  const x1 = (-B + Math.sqrt(delta)) / (2 * A);
  const x2 = (-B - Math.sqrt(delta)) / (2 * A);
  return [x1, x2];
};
const formatAnswer = (x1, x2) => `R1 = ${x1.toFixed(5)}\nR2 = ${x2.toFixed(5)}`;
try {
  const [x1, x2] = calculateBaskhara(A, B, C);
  const answer = formatAnswer(x1, x2);
  console.log(answer);
} catch (error) {
  console.log("É impossível calcular");
}
