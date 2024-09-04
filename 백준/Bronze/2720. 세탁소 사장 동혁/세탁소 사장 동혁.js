const [N, ...input] = require('fs').readFileSync('dev/stdin').toString().trim().split('\n').map(item=>+item);

const list = [0.25, 0.1, 0.05, 0.01];

input.forEach((price) => {
  let count = [];
  list.forEach((item) => {
    const cent = item * 100;
    count.push(Math.floor(price / cent));
    price = price % cent;
  });
  console.log(count.join(" "));
});