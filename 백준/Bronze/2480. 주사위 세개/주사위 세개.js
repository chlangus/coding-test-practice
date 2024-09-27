const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

input.sort((a, b) => b - a);
let temp, num;
let cnt = 1;
input.forEach((i, idx) => {
  if (idx !== 0) {
    if (temp === i) {
      cnt++;
      num = temp;
    }
  }
  temp = i;
});

if (cnt === 1) console.log(input[0] * 100);
if (cnt === 2) console.log(1000 + num * 100);
if (cnt === 3) console.log(10000 + num * 1000);
