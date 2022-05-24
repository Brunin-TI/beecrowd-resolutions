const filePath = __dirname.split("\\").pop() + "/stdin";
const input = require("fs").readFileSync(filePath, "utf8");
const lines = input.split("\n");
const ddd = lines[0];
const dddMap = {
  61: "Brasilia",
  71: "Salvador",
  11: "Sao Paulo",
  21: "Rio de Janeiro",
  32: "Juiz de Fora",
  19: "Campinas",
  27: "Vitoria",
  31: "Belo Horizonte",
};
if (!dddMap[ddd]) {
  console.log("DDD nao cadastrado");
} else {
  const dddResult = dddMap[ddd];
  console.log(dddResult);
}
