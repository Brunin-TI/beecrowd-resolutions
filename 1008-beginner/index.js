const input = require("fs").readFileSync("1008-beginner/stdin", "utf8");
const lines = input.split("\n");

const [id, workedHours, hourlyWage] = lines.map((n) => parseFloat(n));
const calculateSalary = (workedHours, hourlyWage) => workedHours * hourlyWage;
const salary = calculateSalary(workedHours, hourlyWage);

const formatAnswer = (id, salary) => {
  return `NUMBER = ${id}\nSALARY = U$ ${salary.toFixed(2)}`;
};
const answer = formatAnswer(id, salary);
console.log(answer);
