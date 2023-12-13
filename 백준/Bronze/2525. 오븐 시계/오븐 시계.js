const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// 

let time = input[0].split(" ");

let hour = parseInt(time[0]);
let min = parseInt(time[1]);
let ovmin = parseInt(input[1]);

min = min + ovmin;


while (min > 59) {
  hour++;
  min -= 60;
}


if (hour > 23) {
  hour -= 24;
}

console.log(hour, min);

