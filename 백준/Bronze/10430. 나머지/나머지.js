const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
// "/dev/stdin"

let a = parseInt(input[0]);
let b = parseInt(input[1]);
let c = parseInt(input[2]);

console.log((a + b) % c);
console.log(((a % c) + (b % c)) % c);
console.log((a * b) % c);
console.log(((a % c) * (b % c)) % c);
