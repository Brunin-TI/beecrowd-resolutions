const filePath = __dirname.split("\\").pop() + "/stdin";
const input = require("fs").readFileSync(filePath, "utf8");
const lines = input.split("\n");

const [salary] = lines[0].split(" ").map(Number);

const newSalary = (salary, adjust) => {
  return salary + salary * adjust;
};
const formatSalary = (salary, adjust, baseSalary) => {
  return `Novo salario: ${salary.toFixed(2)}${"\n"}Reajuste ganho: ${(
    adjust * baseSalary
  ).toFixed(2)}${"\n"}Em percentual: ${Math.floor(adjust * 100)} %`;
};
if (salary >= 0 && salary <= 400.0) {
  console.log(formatSalary(newSalary(salary, 0.15), 0.15, salary));
}
if (salary >= 400.01 && salary <= 800.0) {
  console.log(formatSalary(newSalary(salary, 0.12), 0.12, salary));
}
if (salary >= 800.01 && salary <= 1200.0) {
  console.log(formatSalary(newSalary(salary, 0.1), 0.1, salary));
}
if (salary >= 1200.01 && salary <= 2000.0) {
  console.log(formatSalary(newSalary(salary, 0.07), 0.07, salary));
}
if (salary > 2000.0) {
  console.log(formatSalary(newSalary(salary, 0.04), 0.04, salary));
}
