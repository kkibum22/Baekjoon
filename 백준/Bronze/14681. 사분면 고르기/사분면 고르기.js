const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

// "/dev/stdin"

let x = parseInt(input[0]);
let y = parseInt(input[1]);

let result = 0;

if (x > 0 && y > 0) {
  result = 1;
} else if (x < 0 && y > 0) {
  result = 2;
} else if (x < 0 && y < 0) {
  result = 3;
} else {
  result = 4;
}

console.log(result);
