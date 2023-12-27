const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
// "/dev/stdin"

console.log(Number(input) - 543);
