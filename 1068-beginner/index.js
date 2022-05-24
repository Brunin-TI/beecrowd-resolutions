const filePath = __dirname.split("\\").pop() + "/stdin";
const input = require("fs").readFileSync(filePath, "utf8");
const lines = input.split("\n");
const x = Number(lines[0]);
const firstOdd = x % 2 === 0 ? x + 1 : x;
for (let i = firstOdd; i <= firstOdd + 10; i = i + 2) {
  console.log(i);
}
// const secondOdd = firstOdd + 2;
// const thirdOdd = secondOdd + 2;
// const fourthOdd = thirdOdd + 2;
// const fifthOdd = fourthOdd + 2;
// const sixthOdd = fifthOdd + 2;
// const oddArray = [firstOdd, secondOdd, thirdOdd, fourthOdd, fifthOdd, sixthOdd];
// console.log(oddArray.join("\n"));
