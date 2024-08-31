const [input, ...times] = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

times.sort(
  (a, b) =>
    +a.split(" ")[1] - +b.split(" ")[1] || +a.split(" ")[0] - +b.split("")[0]
);
let count = 0;
let prevEnd = 0;
times.forEach((time) => {
  [start, end] = time.split(" ");
  if (prevEnd <= +start) {
    prevEnd = +end;
    count++;
  }
});

console.log(count);
