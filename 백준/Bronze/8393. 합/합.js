const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
// 

let a = parseInt(input);

let answer = 0;
for (let i = 0; i <= a; ++i) {
  answer += i;
}
console.log(answer);
