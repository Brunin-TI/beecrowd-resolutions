const filePath = __dirname.split("\\").pop() + "/stdin";
const input = require("fs").readFileSync(filePath, "utf8");
const lines = input.split("\n");

const characteristics = lines.slice(0, 3).join("-");

const characteristicsMap = {
  "vertebrado-ave-carnivoro": "aguia",
  "vertebrado-ave-onivoro": "pomba",
  "vertebrado-mamifero-onivoro": "homem",
  "vertebrado-mamifero-herbivoro": "vaca",
  "invertebrado-inseto-hematofago": "pulga",
  "invertebrado-inseto-herbivoro": "lagarta",
  "invertebrado-anelideo-hematofago": "sanguessuga",
  "invertebrado-anelideo-onivoro": "minhoca",
};
const animal = characteristicsMap[characteristics];
console.log(animal);
