const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// 

let a = parseInt(input[0]);
let b = input[1].split(" ");
let c = parseInt(input[2]);
let d = input[3].split(" ");

// 첫째 줄 상근이가 갖고 있는 카드의 갯수
// 둘째 줄 숫자카드에 적혀있는 정수
// 셋째 줄 M개
// 넷째 줄 M에 적혀있는 정수

let answer = [];

let obj = {};
for (let i = 0; i < b.length; i++) {
  obj[b[i]] = 1;
}

for (let i = 0; i < d.length; i++) {
  if (obj[d[i]]) {
    answer.push(1);
  } else {
    answer.push(0);
  }
}


console.log(answer.join(" "));
