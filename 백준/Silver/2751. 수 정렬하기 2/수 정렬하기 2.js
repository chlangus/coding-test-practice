const [N, ...numbers] = require('fs').readFileSync('dev/stdin').toString().trim().split('\n').map((item)=> Number(item));

(function solution() {
  numbers.sort((a, b) => a - b);
  console.log(numbers.join('\n'));
})();
    
    