[N, ...input] = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

const array = [];

input.forEach((line) => {
  // push, pop, size, empty, top
  const [op, number] = line.split(" ");
  if (op === "push") array.push(number);
  if (op === "pop") console.log(array.length ? +array.pop() : -1);
  if (op === "size") console.log(array.length);
  if (op === "empty") console.log(array == "" ? 1 : 0);
  if (op === "top") console.log(array.length ? +array[array.length - 1] : -1);
});
