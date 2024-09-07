[N, inputA, M, inputB] = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");


inputA = new Set(inputA.split(" ").map(Number));
inputB = inputB.split(" ").map(Number);

const result = inputB.map((target) => (inputA.has(target) ? 1 : 0));

console.log(result.join("\n"));
