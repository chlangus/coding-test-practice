function solution(code) {
    let answer = '';
    let mode = 0;
    for(idx in code){
        if(code[idx] === '1') mode = mode === 1 ? 0 : 1;
        else {
            if(mode === 0 && idx % 2 === 0) answer += code[idx];
            else if(mode === 1 && idx % 2 === 1) answer += code[idx];
        }
    }
    
    return answer ? answer : "EMPTY";
}