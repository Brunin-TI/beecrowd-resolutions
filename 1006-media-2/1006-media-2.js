const input = require("fs").readFileSync("1006-media-2/stdin", "utf8");
const lines = input.split("\n");

const [a, b, c] = lines.map((n) => parseFloat(n));

function resolution1(a, b, c) {
  const media = (a, b) => (a * 2) / 10 + (b * 3) / 10 + (c * 5) / 10;
  const result = media(a, b, c);
  const formatAnswer = (result) => `MEDIA = ${result.toFixed(1)}`;
  const answer = formatAnswer(parseFloat(result));
  return answer;
}

console.log(resolution1(a, b, c));
