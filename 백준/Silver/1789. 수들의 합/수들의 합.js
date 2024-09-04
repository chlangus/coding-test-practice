const input = +require('fs').readFileSync('dev/stdin').toString().trim();

let sum = 0;
let i = 1;
while (true) {
  sum += i;
  // sum보다 높으면 이전거에서 하나 빼주면 그것이 최댓값
  if (sum === input) break;
  else if (sum > input) {
    i--;
    break;
  }
  i++;
}
console.log(i);