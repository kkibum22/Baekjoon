const { reverse } = require('dns');
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
// '/dev/stdin'

let a = input[0].split('').reverse();
let b = input[1].split('').reverse();

let answer = [];

if (a > b) {
  answer.push(a.join(''));
} else if (b > a) {
  answer.push(b.join(''));
} else if (a.join('') === b.join('')) {
  answer.push(a.join(''));
}

console.log(...answer);
