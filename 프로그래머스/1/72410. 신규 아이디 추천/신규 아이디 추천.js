function solution(new_id) {
    var answer = '';
    const lower_id = new_id.toLowerCase();
    for(let i=0; i<lower_id.length; i++){
        if((lower_id[i] >= '0' && lower_id[i] <= '9') || (lower_id[i] >= 'a' && lower_id[i] <= 'z') || lower_id[i] === '-' || lower_id[i] === '_' || lower_id[i] === '.') {
            if(answer.length === 0 && lower_id[i] === '.') continue;
            if(lower_id[i] === '.' && answer[answer.length-1] === '.') continue; 
            answer += lower_id[i];
            
        }
    }
    if(answer === '') return 'aaa';
    if(answer[answer.length-1] === '.') answer = answer.slice(0, answer.length-1);
    
    if(answer.length > 15) answer = answer.slice(0,15);
    if(answer[answer.length-1] === '.') answer = answer.slice(0, answer.length-1);

    while(answer.length<=2){
        console.log(answer.length, answer);
        answer += answer[answer.length-1];
    }
    return answer;
}