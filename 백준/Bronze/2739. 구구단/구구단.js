const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
// 

let a = parseInt(input[0]);
// let b = parseInt(input[1]);
// let c = parseInt(input[2]);

// 주사위 눈 3개가 다같으면 10000 + (눈의수)*1000

// 주사위 눈 2개가 같으면 1000 + (눈의수) * 100

// 모두 다른 눈이 나오면 (가장 큰 눈)

for (let i = 1; i < 10; i++) {
  console.log(`${a} * ${i} = ${i * a}`);
}
