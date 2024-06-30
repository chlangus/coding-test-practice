           const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

solution(input);

function solution(){
    // N개 박스, M번 순서 바꿈
    const [N,M] = input[0].split(' ');
    
    let array = new Array();
    
    // 1 ~ N 배열 생성
    for(let i = 1; i < +N + 1; i++){
        array.push(i);
    }
    
    // M번 반복
    for(let i = 1; i < +M + 1; i++){
        // a부터 b까지 역순
        const [a, b] = input[i].split(' ');
        let tempArray = new Array();
        
        // 역순 배열에 저장
        for(let j = +b - 1; j >= +a - 1; j--){
            tempArray.push(array[j]);
        }
        
        // 역순배열 정답 배열에 적용
        for(let j = +a - 1; j <= +b - 1; j++){
            array[j] = tempArray.shift();
        }
    }
    
      console.log(array.join(' ', ','));

}