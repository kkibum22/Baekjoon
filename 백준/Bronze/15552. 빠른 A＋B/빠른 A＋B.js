const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// 

let a = parseInt(input[0]);

let answer = [];

for (let i = 1; i <= a; i++) {
  let score = input[i].split(" ");
  let b = Number(score[0]) + Number(score[1]);
  answer.push(b);
}

console.log(answer.join("\n"));

// 246