function solution(a, b, n) {
    var answer = 0;
    let restBottle = n;
    while(a<=restBottle){
        let getBottle = 0;
        
        getBottle += Math.floor(restBottle/a) * b; 
        restBottle = getBottle + restBottle % a;
        answer += getBottle;
    }
    
    return answer;
}