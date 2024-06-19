const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = fs.readFileSync(file).toString().trim().split(" ");

solution(input);

function solution(input) {
  let answer = 0;
  for(const number of input){
      answer += +number;
  }
    
  console.log(answer);
}
