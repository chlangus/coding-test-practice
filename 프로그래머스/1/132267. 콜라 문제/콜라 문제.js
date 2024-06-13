function solution(a, b, n) {
    var answer = 0;
    let restBottle = n;
    while(a<=restBottle){
        let getBottle = 0;
        
        // 교환받은 콜라
        getBottle += Math.floor(restBottle/a) * b; 
        
        // 교환반은 콜라와 남아있는 콜라 나누고 남은것
        restBottle = getBottle + restBottle % a;
        
        // 교환받은 콜라 누산
        answer += getBottle;
    }
    
    return answer;
}