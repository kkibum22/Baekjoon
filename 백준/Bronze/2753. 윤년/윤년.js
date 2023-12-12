const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

let a = parseInt(input);
// 

// 윤년은 연도가 4의 배수이면서, 100의 배수가 아닐 때 또는 400의 배수일 때이다.

if ((a % 4 === 0 && a % 100 !== 0) || (a % 4 === 0 && a % 400 === 0)) {
  console.log(1);
} else {
  console.log(0);
}
