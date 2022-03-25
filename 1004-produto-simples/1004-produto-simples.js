const input = require("fs").readFileSync("1005-media-1/stdin", "utf8");
const lines = input.split("\n");

// const raio = parseFloat(lines[0]);

const a = parseFloat(lines[0]);
const b = parseFloat(lines[1]);
const prod = a * b;
console.log(`PROD = ${prod}`);
