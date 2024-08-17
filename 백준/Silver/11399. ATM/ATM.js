const [N, numbers] = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

(function solution() {
  const sortedArray = numbers.split(" ").sort((a, b) => a - b);
  let answer = 0;
  let sum = 0;
  sortedArray.forEach((item) => {
    sum += +item;
    answer += sum;
  });
  console.log(answer);
})();