const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = fs.readFileSync(file).toString().trim();

let answer = '';

for(let i =0; i < input/4; i++){
    answer += 'long ';
}
answer += 'int';
console.log(answer);
