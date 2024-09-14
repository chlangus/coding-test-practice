function solution(l, r) {
    var answer = [];
    for(let i = l; i<=r; i++){
        if(!(i % 5)){
            let isF = true;
            i.toString().split('').forEach((item)=> {
                if(!(item === '0' || item === '5')) isF = false;
            })
            
            if(isF) answer.push(i);
        }        
    }
    if(answer == '') answer.push(-1);
    return answer;
}