const [N, ...input] = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const inputList = input.map((item)=> item.split(' ').map((item)=>+item));
let answer = 0;
for (let i = 0; i < 2; i++) {
  i === 0
    ? inputList[i].sort((a, b) => b - a)
    : inputList[i].sort((a, b) => a - b);
}

for (let i = 0; i < +N; i++) {
  answer += inputList[0][i] * inputList[1][i];
}

console.log(answer);
// 큰것과 작은것 곱한것 더해주기