const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
// "/dev/stdin"

let a = parseInt(input[0]);
let b = parseInt(input[1]);

console.log(a - b);
