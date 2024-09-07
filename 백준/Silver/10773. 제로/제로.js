[N, ...input] = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const array = [];
input.forEach((cur) => {
  if (cur === 0) array.pop();
  else array.push(cur);
});
const result = array.length ? array.reduce((acc, cur) => acc + cur) : 0;
console.log(result);