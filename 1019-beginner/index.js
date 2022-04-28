const filePath = __dirname.split("\\").pop() + "/stdin";
const input = require("fs").readFileSync(filePath, "utf8");
const lines = input.split("\n");

const [seconds] = lines.map((n) => parseInt(n));

const getHours = parseInt(seconds / 3600);
const getMinutes = parseInt((seconds % 3600) / 60);
const getSeconds = parseInt((seconds % 3600) % 60);
const formatAnswer = (hours, minutes, seconds) => {
  return `${hours}:${minutes}:${seconds}`;
};
const answer = formatAnswer(getHours, getMinutes, getSeconds);
console.log(answer);
