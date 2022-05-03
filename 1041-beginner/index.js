const filePath = __dirname.split("\\").pop() + "/stdin";
const input = require("fs").readFileSync(filePath, "utf8");
const lines = input.split("\n");

const [x, y] = lines[0].split(" ").map(Number);

const quadrant = (x, y) => {
  if (x > 0 && y > 0) {
    return console.log("Q1");
  } else if (x < 0 && y > 0) {
    return console.log("Q2");
  } else if (x < 0 && y < 0) {
    return console.log("Q3");
  } else if (x > 0 && y < 0) {
    return console.log("Q4");
  } else if (x === 0 && y === 0) {
    return console.log("Origem");
  } else if (x === 0 && y !== 0) {
    return console.log("Eixo Y");
  } else if (x !== 0 && y === 0) {
    return console.log("Eixo X");
  }
};

quadrant(x, y);
