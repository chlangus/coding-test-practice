const [N, ...input] = require('fs').readFileSync('dev/stdin').toString().trim().split('\n').map(item => item.split(' ').map(item=>BigInt(item))); 
let min = input[1][0];
let answer = BigInt(0);
for (let i = 0; i < N - 1; i++) {
  if (min > input[1][i]) min = input[1][i];
  answer += min * input[0][i];
}

console.log(answer.toString());
// 주유값 적은거 저장해두고 다음꺼보다 작으면 그걸로 거리만큼 더 크면 다음꺼 저장한 후 계속
// 거리
// 주유값

