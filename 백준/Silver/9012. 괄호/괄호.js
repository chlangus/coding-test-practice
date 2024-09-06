[N, ...input] = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

input.forEach((line) => {
  const array = [];

  for (let i = 0; i < line.length; i++) {
    if (line[i] === ")" && array[array.length - 1] === "(") {
      array.pop();
      continue;
    }
    array.push(line[i]);
  }
  if (array.toString().trim() == "") console.log("YES");
  else console.log("NO");
});
