const input = require("fs").readFileSync("1002-area-circle/stdin", "utf8");
const lines = input.split("\n");

const raio = parseFloat(lines[0]);

const calculateArea = (raio, PI = 3.14159) => Math.pow(raio, 2) * PI;
const formatAnswer = (area) => `A=${area.toFixed(4)}`;
const area = calculateArea(raio);
const answer = formatAnswer(area);
console.log(answer);
