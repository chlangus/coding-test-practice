function solution(numbers) {
    const temp = [];
    
    for(let i=0; i< numbers.length; i++){
        for(let j=i; j<numbers.length; j++){
        if(j===i) continue;
        temp.push(numbers[i]+numbers[j]);
        }
    }
    const answer = [...new Set(temp)].sort((a,b)=>a-b);
    
    return answer;
}