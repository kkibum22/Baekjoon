const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
// 

let a = parseInt(input[0]);
let b = parseInt(input[1]);

// 알람 시간 -45분
b = b - 45;

if (b < 0) {
  (b += 60);
  (a -= 1);
}

if (a < 0) {
  a += 24;
}

console.log(a, b);
