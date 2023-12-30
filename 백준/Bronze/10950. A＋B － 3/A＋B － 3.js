const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// "/dev/stdin"

let num = parseInt(input[0]);

for (let i = 1; i <= num; i++) {
  let score = input[i].split(" ");
  console.log(parseInt(score[0]) + parseInt(score[1]));
}
