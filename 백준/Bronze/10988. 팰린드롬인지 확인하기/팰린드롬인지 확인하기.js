const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

solution(input);

function solution(input) {
  console.log(input === input.split("").reverse().join("") ? 1 : 0);
}