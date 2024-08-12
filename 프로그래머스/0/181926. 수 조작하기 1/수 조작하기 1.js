function solution(n, control) {
    var answer = n;
    
    for(index in control){
        if(control[index] === 'w') answer += 1;
        if(control[index] === 's') answer -= 1;
        if(control[index] === 'd') answer += 10;
        if(control[index] === 'a') answer -= 10;
    }
    
    return answer;
}