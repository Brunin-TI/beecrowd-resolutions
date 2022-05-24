const filePath = __dirname.split("\\").pop() + "/stdin";
const input = require("fs").readFileSync(filePath, "utf8");
const lines = input.split("\n");

const startDay = Number(lines[0].slice(4, lines[0].length));
const startEvent = lines[1].split(" : ").map(Number);
const endDay = Number(lines[2].slice(4, lines[2].length));
const endEvent = lines[3].split(" : ").map(Number);

const transformEventToSeconds = (day, event) => {
  const [hour, minute, second] = event;
  return day * 24 * 60 * 60 + hour * 60 * 60 + minute * 60 + second;
};
const startEventInSeconds = transformEventToSeconds(startDay, startEvent);
const endEvenInSeconds = transformEventToSeconds(endDay, endEvent);

const differenceBetweenEvents = endEvenInSeconds - startEventInSeconds;
const transformToDayHourMinuteSecond = (seconds) => {
  const day = Math.floor(seconds / (24 * 60 * 60));
  const hour = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60));
  const minute = Math.floor((seconds % (60 * 60)) / 60);
  const second = Math.floor(seconds % 60);
  return [day, hour, minute, second];
};
const [day, hour, minute, second] = transformToDayHourMinuteSecond(
  differenceBetweenEvents
);
const result = `${day} dia(s)${"\n"}${hour} hora(s)${"\n"}${minute} minuto(s)${"\n"}${second} segundo(s)`;
console.log(result);
