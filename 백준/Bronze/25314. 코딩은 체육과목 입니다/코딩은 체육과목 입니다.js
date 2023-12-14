const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
// 

let N = parseInt(input);

// N은 4의배수
// 4의배수 1번 당 롱 1번

// 4 > long int
// 20 > long long long long int

let answer = ""

for (let i = 4; i <= N; i++) {

  if (!(i % 4)) {
    answer += "long"
}
}

console.log(`${answer.split("g").join("g ")}int`)