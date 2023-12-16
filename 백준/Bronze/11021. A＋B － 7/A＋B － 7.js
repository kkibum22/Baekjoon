const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// "/dev/stdin"

let a = parseInt(input[0]);
let answer = [];

for (let i = 1; i <= a; i++) {
  let f = input[i].split(" ");
  let b = Number(f[0]) + Number(f[1]);
  let c = `Case #${i}: ${b}`;
  answer.push(c);
}

console.log(answer.join("\n"));
