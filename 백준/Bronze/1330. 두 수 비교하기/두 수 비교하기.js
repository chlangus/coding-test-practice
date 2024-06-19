const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = fs.readFileSync(file).toString().trim().split(" ");

solution(input);

function solution(input) {
  let answer = "==";
  if (+input[0] > +input[1]) answer = ">";
  else if (+input[0] < +input[1]) answer = "<";

  console.log(answer);
}
