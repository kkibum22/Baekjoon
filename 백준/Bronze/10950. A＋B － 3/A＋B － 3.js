const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// 

let a = input[0];

for (let i = 1; i <= a; i++) {
  let score = input[i].split(" ");
  console.log(Number(score[0]) + Number(score[1]));
}
