function solution(n) {
    let i = 2;
    answer = 0;
    while(i<=n){
        if(!(i%2)) answer+=i;
        i++;
    }
    return answer;
}