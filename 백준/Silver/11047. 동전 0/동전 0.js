const [input, ...coinList] = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

let [N, K] = input.split(" ").map((n) => +n);
const sortedCoinList = coinList.sort((a, b) => +b - +a);
let count = 0;

sortedCoinList.forEach((currentCoin) => {
  if (K >= currentCoin) {
    count += Math.floor(K / currentCoin);
    K %= currentCoin;
  }
}, 0);

console.log(count);