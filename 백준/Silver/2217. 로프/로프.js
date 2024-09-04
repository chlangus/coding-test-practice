const [N, ...input] = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((item) => +item);

input.sort((a, b) => a - b);

const count = [];

// 배열중 가장 작은것의 배열의 길이만큼이 최대 무게
input.forEach((item, index) => {
  count.push(item * (input.length - index));
});

console.log(Math.max(...count));