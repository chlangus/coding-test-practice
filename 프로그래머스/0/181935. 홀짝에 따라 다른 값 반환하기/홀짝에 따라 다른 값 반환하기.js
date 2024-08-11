function solution(n) {
    let answer = 0;
    while(n>0){
        n % 2 === 1 ? answer += n : answer += n*n;    
        n = n - 2;
    }    
    
    return answer;
}