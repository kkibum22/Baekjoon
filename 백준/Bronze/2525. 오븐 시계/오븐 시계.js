const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// "/dev/stdin"

let fullTime = input[0].split(" ");
let H = parseInt(fullTime[0]);
let M = parseInt(fullTime[1]);

let T = parseInt(input[1]);

M = M + T;

if (M >= 60) {
  H += Math.floor(M / 60);
  M %= 60;
}
if (H > 23) {
  H -= 24;
}

console.log(H, M);
