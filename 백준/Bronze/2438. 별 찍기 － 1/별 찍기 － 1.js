const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
// "/dev/stdin"

let a = "";

for (let i = 1; i <= input; i++) {
  a += "*".repeat(i) + "\n";
}

console.log(a.trim());
