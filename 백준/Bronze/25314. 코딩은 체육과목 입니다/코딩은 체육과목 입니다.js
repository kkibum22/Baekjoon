const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
// "/dev/stdin"

let answer = "";

for (let i = 1; i <= input; i += 4) {
  answer += "long ";
}
console.log(`${answer}int`);

// N은 4의배수
// 4의배수 1번 당 롱 1번

// 4 > long int
// 20 > long long long long int
