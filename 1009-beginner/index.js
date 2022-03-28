const input = require("fs").readFileSync("1009-beginner/stdin", "utf8");
const lines = input.split("\n");

const baseSalary = parseFloat(lines[1]);
const commission = parseFloat(lines[2]);

const calculateSalary = (baseSalary, commission) => {
  return baseSalary + commission * 0.15;
};

const salary = calculateSalary(baseSalary, commission);

const formatAnswer = (salary) => {
  return `TOTAL = R$ ${salary.toFixed(2)}`;
};
const answer = formatAnswer(salary);
console.log(answer);
