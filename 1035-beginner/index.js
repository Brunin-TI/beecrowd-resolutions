const filePath = __dirname.split("\\").pop() + "/stdin";
const input = require("fs").readFileSync(filePath, "utf8");
const lines = input.split("\n");

const [A, B, C, D] = lines[0].split(" ").map(Number);

const validateInput = (A, B, C, D) => {
  return B > C && D > A && C + D > A + B && C > 0 && D > 0 && A % 2 === 0;
};
const isAccepted = validateInput(A, B, C, D);
const message = isAccepted ? "Valores aceitos" : "Valores nao aceitos";
console.log(message);
