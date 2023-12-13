const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
// 

let a = parseInt(input[0]);
let b = parseInt(input[1]);
let c = parseInt(input[2]);

// 주사위 눈 3개가 다같으면 10000 + (눈의수)*1000

// 주사위 눈 2개가 같으면 1000 + (눈의수) * 100

// 모두 다른 눈이 나오면 (가장 큰 눈)

if (a === b && b === c) {
  console.log(10000 + a * 1000);
} else if (a === b) {
  console.log(1000 + a * 100);
} else if (a === c) {
  console.log(1000 + a * 100);
} else if (b === c) {
  console.log(1000 + c * 100);
}


if (a !== b && b !== c && a!==c) {
  let bnum = Math.max(a, b, c);
  console.log(bnum * 100);
}
