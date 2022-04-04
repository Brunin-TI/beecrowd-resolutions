const input = require("fs").readFileSync("1011-beginner/stdin", "utf8");
const lines = input.split("\n");

const radius = lines.map((n) => parseFloat(n));
const pi = 3.14159;
const calculateVolume = (4.0 / 3.0) * pi * radius[0] ** 3;
const result = calculateVolume.toFixed(3);
const formatAnswer = `volume = ${result}`;
const answer = formatAnswer.toUpperCase();
console.log(answer);
