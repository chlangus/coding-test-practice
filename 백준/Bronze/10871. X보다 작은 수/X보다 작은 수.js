const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

[N, X] = input.shift().split(" ").map(Number);
const list = input[0].split(" ").map(Number);
const answer = [];
for (let i = 0; i < +N; i++) {
  if (list[i] < +X) answer.push(list[i]);
}
console.log(answer.join(" "));