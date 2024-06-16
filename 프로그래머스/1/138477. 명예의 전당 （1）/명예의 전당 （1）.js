function solution(k, score) {
    var answer = [];
    let honor = [];
    for(let i=0; i < score.length; i++){
        // 명예의전당이 꽉 차있고 최소값이 스코어보다 작을때 숫자 제외
        if(honor.length === k && honor[0] < score[i]) honor.shift();
        // 명예의 전당 안차있을때 넣어주고 정렬
        if(honor.length < k){
            honor.push(score[i]);
            honor.sort((a,b) => a-b);
        }
        
        // 명예의 전당 최솟값 push
        answer.push(honor[0]);
    }
    return answer;
}