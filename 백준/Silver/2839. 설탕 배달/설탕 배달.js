const input = +require("fs").readFileSync("dev/stdin").toString();

// 3 and 5
// 5 최대한 많은것부터
let minus = 0;
let count = 0;
while (true) {
  let changeInput = input;
  // 5로 나눈거 count
  count = Math.floor(changeInput / 5) - minus;
  // 5로 나눈 나머지
  changeInput = ((changeInput - 5 * minus) % 5) + 5 * minus;
  // 3으로 나눠지면 count 더하기
  if (changeInput % 3 === 0) {
    count += changeInput / 3;
    break;
  }
  // 3으로 안나눠지면
  else {
    // 마이너스 더해주기
    minus++;
    // 마이너스가 3으로 나눈 값보다 크다면 안나눠지는거로 간주하여 count -1
    if (minus > Math.floor(input / 3)) {
      count = -1;
      break;
    }
  }
}

console.log(count);
