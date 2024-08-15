const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const grade = {
  "A+": 4.5,
  A0: 4.0,
  "B+": 3.5,
  B0: 3.0,
  "C+": 2.5,
  C0: 2.0,
  "D+": 1.5,
  D0: 1.0,
  F: 0.0,
};

solution(input);

function solution(input) {
  let total = 0;
  let count = 0;
  for (i of input) {
    const [a,b,c] = i.split(" ");
    if (c !== 'P') {
      count += +b;
      total += +b * grade[c];
    }
  }

 total === 0
    ? console.log((0).toFixed(6))
    : console.log((total / count).toFixed(6));
}

