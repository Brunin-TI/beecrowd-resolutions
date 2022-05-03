const filePath = __dirname.split("\\").pop() + "/stdin";
const input = require("fs").readFileSync(filePath, "utf8");
const lines = input.split("\n");

const [A, B, C] = lines[0].split(" ").map(Number);
const perimeterTriangle = (A, B, C) => {
  const perimeter = A + B + C;
  return perimeter;
};
const areaTrapezium = (A, B, C) => {
  const area = ((A + B) / 2) * C;
  return area;
};

const isTriangle = (A, B, C) => {
  if (A < B + C && B < A + C && C < A + B) {
    return console.log(`Perimetro = ${perimeterTriangle(A, B, C).toFixed(1)}`);
  } else {
    return console.log(`Area = ${areaTrapezium(A, B, C).toFixed(1)}`);
  }
};

isTriangle(A, B, C);
