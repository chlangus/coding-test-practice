const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

solution(input);

function solution(input) {
  let answer = "No";
  let totalPrice = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i].includes("\r"))
      input[i] = input[i].slice(0, input[i].length - 1);
  }
  const X = input[0];

  for (let i = 2; i < input.length; i++) {
    const [price, number] = input[i].split(" ");

    totalPrice  += +price * +number;
  }

  if (+X === +totalPrice) answer = "Yes";

  console.log(answer);
}
