const filePath = __dirname.split("\\").pop() + "/stdin";
const input = require("fs").readFileSync(filePath, "utf8");
const lines = input.split("\n");

const [x1, y1] = lines[0].split(" ").map(Number);
const [x2, y2] = lines[1].split(" ").map(Number);

const calculateDistanceBetweenThem = (x1, y1, x2, y2) => {
  const p1 = Math.pow(x2 - x1, 2);
  const p2 = Math.pow(y2 - y1, 2);
  const distance = Math.sqrt(p1 + p2);
  return distance;
};
const distance = calculateDistanceBetweenThem(x1, y1, x2, y2);
const formatAnswer = (distance) => `${distance.toFixed(4)}`;
const answer = formatAnswer(distance);
console.log(answer);
