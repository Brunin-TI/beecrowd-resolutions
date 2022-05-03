const filePath = __dirname.split("\\").pop() + "/stdin";
const input = require("fs").readFileSync(filePath, "utf8");
const lines = input.split("\n");

const [v1, v2, v3] = lines[0].split(" ").map(Number);

const organizeArray = (values) => {
  const descending = values
    .sort((a, b) => {
      return a - b;
    })
    .join("\n");
  return descending;
};
const formattedArray = organizeArray([v1, v2, v3]);
const inputDefault = lines[0].split(" ").join("\n");
const formatAnswer = `${formattedArray}\n\n${inputDefault}`;
const answer = formatAnswer;
console.log(answer);
