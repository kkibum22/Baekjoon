const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// 

let X = parseInt(input[0]);
let N = parseInt(input[1]);

const answer = [];
let total = 0;

for (let i = 0; i < N; i++) {
  const a = input[i + 2].split(" ").map((n) => Number(n));
  let price = a[0] * a[1];
  total += price;
}

X === total ? console.log("Yes") : console.log("No");

