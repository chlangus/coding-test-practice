const input = require("fs").readFileSync("dev/stdin").toString();

const minusSplitInput = input.split("-");
// 마이너스로 나눠주고 플러스있는것들 앞뒤로 괄호
const res = minusSplitInput.reduce((acc, cur, idx) => {
  const sum = cur.split("+").reduce((sumAcc, num) => sumAcc + +num, 0);
  return idx === 0 ? acc + sum : acc - sum;
}, 0);
console.log(''+res);
