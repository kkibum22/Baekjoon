const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// "/dev/stdin"

// 첫째 줄에는 영수증에 적힌 총 금액 X가 주어진다.
// 둘째 줄에는 영수증에 적힌 구매한 물건의 종류의 수 N이 주어진다.
// N개의 줄에는 각 물건의 가격 a와 개수 b가 공백을 사이에 두고 주어진다.

let answer = 0;

for (let i = 1; i <= input[1]; i++) {
  let price = input[i + 1].split(" ");
  answer += parseInt(price[0]) * parseInt(price[1]);
}

if (answer === parseInt(input[0])) {
  console.log("Yes");
} else {
  console.log("No");
}
