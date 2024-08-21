function solution(number, limit, power) {
    var answer = 0;
    const array = [];
    for(let i = 1; i <= number; i++){
        let count = 0;
        for(let j = 1; j<=i/2; j++){
            if(i%j === 0) count++;
        }
        count++;
        if(count > limit) count = power;
        
        array.push(count);
    }
    answer = array.reduce((acc,cur)=> acc+cur,0);
    return answer;
}