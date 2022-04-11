const filePath = __dirname.split("\\").pop() + "/stdin";
const input = require("fs").readFileSync(filePath, "utf8");
const lines = input.split("\n");

const [kilometers, liters] = lines.map(Number);
const calculateAverageConsumption = (kilometers, liters) => kilometers / liters;
const performance = calculateAverageConsumption(kilometers, liters);
const formatAnswer = (performance) => `${performance.toFixed(3)} km/l`;
const answer = formatAnswer(performance);
console.log(answer);
