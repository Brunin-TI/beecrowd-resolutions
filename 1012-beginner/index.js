const filePath = __dirname.split("\\").pop() + "/stdin";
const input = require("fs").readFileSync(filePath, "utf8");
const lines = input.split("\n");

const [A, B, C] = lines[0].split(" ").map(Number);
const pi = 3.14159;
const calculateTriangleArea = (A, C) => (A * C) / 2;
const calculateCircleArea = (C) => pi * Math.pow(C, 2);
const calculateAreaTrapezoid = (A, B, C) => ((A + B) / 2) * C;
const calculateSquareArea = (B) => Math.pow(B, 2);
const calculateRectangleArea = (A, B) => A * B;
const formatAnswer = `TRIANGULO: ${calculateTriangleArea(A, C).toFixed(
  3
)}\nCIRCULO: ${calculateCircleArea(C).toFixed(
  3
)}\nTRAPEZIO: ${calculateAreaTrapezoid(A, B, C).toFixed(
  3
)}\nQUADRADO: ${calculateSquareArea(B).toFixed(
  3
)}\nRETANGULO: ${calculateRectangleArea(A, B).toFixed(3)}`;
const answer = formatAnswer;
console.log(answer);
