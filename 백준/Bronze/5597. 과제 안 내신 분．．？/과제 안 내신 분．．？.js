const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

solution(input);

function solution(input){
  for (let i = 0; i < input.length; i++) {
    if (input[i].includes("\r"))
      input[i] = input[i].slice(0, input[i].length - 1);
  }
  let answer = [];

  for (let i = 0; i < 30; i++) {
    if (!input.includes(`${i + 1}`)) answer.push(i+1);
  }

  console.log(answer[0]);
  console.log(answer[1]);
}