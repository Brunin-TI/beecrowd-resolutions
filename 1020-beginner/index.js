const filePath = __dirname.split("\\").pop() + "/stdin";
const input = require("fs").readFileSync(filePath, "utf8");
const lines = input.split("\n");

const [days] = lines.map((n) => parseInt(n));

const getYears = parseInt(days / 365);
const getMonths = parseInt((days % 365) / 30);
const getDays = parseInt((days % 365) % 30);
const formatAnswer = (years, months, days) => {
  return `${years} ano(s)\n${months} mes(es)\n${days} dia(s)`;
};
const answer = formatAnswer(getYears, getMonths, getDays);
console.log(answer);
