input = +require("fs").readFileSync("dev/stdin").toString().trim();

// 새로운 배열만들어서 할당하면 메모리 초과
// 스택 사용해서 하면 시간초과
// 연결리스트 사용
// 5분 1분 10초
let answer = 1;
for(let i = input; i>0; i--){
    answer *= i;
}
console.log(answer);