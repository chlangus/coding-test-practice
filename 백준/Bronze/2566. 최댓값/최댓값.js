const fs = require("fs");
const input = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.split(" "));

solution(input);

function solution(input) {
  let max = 0;
  let index = [0, 0];
  for (let i = 0; i < +input.length; i++) {
    for (let j = 0; j < +input[i].length; j++) {
      if (+input[i][j] >= max) {
        index = [i + 1, j + 1];
        max = +input[i][j];
      }
    }
  }
  console.log(max);
  console.log(index.join(" "));
}