function solution(k, score) {
    var answer = [];
    let honor = [];
    for(let i=0; i < score.length; i++){
        if(honor.length === k && honor[0] < score[i]) honor.shift();
        if(honor.length < k){
            honor.push(score[i]);
            honor.sort((a,b) => a-b);
        }
        answer.push(honor[0]);
    }
    return answer;
}