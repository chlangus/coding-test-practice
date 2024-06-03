function solution(dartResult) {
    let answerArray = []; // 정답 배열, 앞의 결과에 * 2 해주기 위함
    let temp; // 현재 결과
    // S,D,T 판별
    // 옵션 유무, 옵션 판별
    for(let i=0; i<dartResult.length; i++){
        // 0에서 9사이면
        if(dartResult[i]>=0 && dartResult[i] <= 9) {
            // 1이고 뒤의 index가 0이면
            if(dartResult[i] == 1 && dartResult[i+1] == 0){
                temp = 10;
                i++;
            }else temp = +dartResult[i];
            continue;
        }
        if(dartResult[i] === 'S') answerArray.push(Math.pow(temp, 1));
        if(dartResult[i] === 'D') answerArray.push(Math.pow(temp, 2));
        if(dartResult[i] === 'T') answerArray.push(Math.pow(temp, 3));
        
        if(dartResult[i] === '*') {
            const len = answerArray.length - 1;
            answerArray[len] = answerArray[len] * 2;
            if(answerArray[len-1]) answerArray[len-1] = answerArray[len-1] * 2;
        }
        
        if(dartResult[i] === '#') {
            const len = answerArray.length - 1;
            answerArray[len] = answerArray[len] * -1;
        }
    }
    
    const answer = answerArray.reduce((acc, cur) => acc + cur, 0);
    
    return answer;
}