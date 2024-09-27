const input = +require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim();
let res;
if(input >= 90) res = 'A';
else if(input >=80) res = 'B';
else if(input >= 70) res = 'C';
else if(input >= 60) res = 'D';
else res = 'F';

console.log(res);