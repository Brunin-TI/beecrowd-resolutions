const filePath = __dirname.split("\\").pop() + "/stdin";
const input = require("fs").readFileSync(filePath, "utf8");
const lines = input.split("\n");

const inputData = lines[0].split(" ").map(Number);
const calculateDuration = (startHours, startMinutes, endHours, endMinutes) => {
  const hoursToMinutes = (hours) => hours * 60;
  const totalStartMinutes = hoursToMinutes(startHours) + startMinutes;
  const totalEndMinutes = hoursToMinutes(endHours) + endMinutes;
  const endMinutesAdjusted =
    totalEndMinutes <= totalStartMinutes
      ? totalEndMinutes + hoursToMinutes(24)
      : totalEndMinutes;
  const difference = endMinutesAdjusted - totalStartMinutes;
  const hours = Math.floor(difference / 60);
  const minutes = difference % 60;
  return { hours, minutes };
};

const answer = calculateDuration(...inputData);
const formatAnswer = ({ hours, minutes }) => {
  return `O JOGO DUROU ${hours} HORA(S) E ${minutes} MINUTO(S)`;
};
console.log(formatAnswer(answer));
