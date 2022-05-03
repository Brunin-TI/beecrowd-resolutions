const filePath = __dirname.split("\\").pop() + "/stdin";
const input = require("fs").readFileSync(filePath, "utf8");
const lines = input.split("\n");

const [n1, n2, n3, n4] = lines[0].split(" ").map(Number);
const examGrade = Number(lines[1]);
const calculateMedia = (notes, weights) => {
  const notesWithWeights = notes.map((note, index) => {
    return note * weights[index];
  });
  const totalNotes = notesWithWeights.reduce((acc, note) => {
    return acc + note;
  }, 0);
  const totalWeight = weights.reduce((acc, weight) => {
    return acc + weight;
  }, 0);
  const media = totalNotes / totalWeight;
  return media;
};
const media = calculateMedia([n1, n2, n3, n4], [2, 3, 4, 1]);
const isApproved = media >= 7 ? true : false;
const isReproved = media < 5 ? true : false;
const inExame = media >= 5 && media <= 6.9 ? true : false;
console.log(`Media: ${media.toFixed(1)}`);
if (isApproved) {
  console.log("Aluno aprovado.");
}
if (isReproved) {
  console.log("Aluno reprovado.");
}
if (inExame) {
  console.log("Aluno em exame.");
  console.log(`Nota do exame: ${examGrade.toFixed(1)}`);
  const mediaFinal = (media + examGrade) / 2;
  if (mediaFinal >= 5) {
    console.log("Aluno aprovado.");
  } else {
    console.log("Aluno reprovado.");
  }
  console.log(`Media final: ${mediaFinal.toFixed(1)}`);
}
