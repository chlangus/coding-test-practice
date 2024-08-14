const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();

solution(input);

function solution(input) {
  for (let i = 0; i < +input; i++) {
    let answer = "";

    for (let j = 0; j < +input - 1 - i; j++) {
      answer += " ";
    }
    for (let j = 0; j < i * 2 + 1; j++) {
      answer += "*";
    }
    console.log(answer);
  }

  for (let i = +input - 1; i > 0; i--) {
    let answer = "";

    for (let j = 0; j < +input - i; j++) {
      answer += " ";
    }
    for (let j = 0; j < i * 2 - 1; j++) {
      answer += "*";
    }
    console.log(answer);
  }
}