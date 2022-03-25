const input = require("fs").readFileSync("1005-media-1/stdin", "utf8");
const lines = input.split("\n");

const [a, b] = lines.map((n) => parseFloat(n));

function resolution1(a, b) {
  const media = (a, b) => (a * 3.5) / 11 + (b * 7.5) / 11;
  const result = media(a, b);
  const formatAnswer = (result) => `MEDIA = ${result.toFixed(5)} `;
  const answer = parseFloat(formatAnswer(result));
  return answer;
}

console.log(resolution1(a, b));
