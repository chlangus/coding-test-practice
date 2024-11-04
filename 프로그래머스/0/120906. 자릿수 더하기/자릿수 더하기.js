function solution(n) {
    let answer = 0;
    for(let i = 0; i<(""+n).length; i++){
        answer += +(''+n)[i];
    }
    return answer;
}