function solution(babbling) {
    var answer = 0;
    const WORD_LIST = ["aya", "ye", "woo", "ma" ];
    
    for(let i of babbling){
        let temp = i;
        let prevWord = '';
        for(let j = 0; j<WORD_LIST.length; j++){
            if(temp.startsWith(WORD_LIST[j]) && WORD_LIST[j] !== prevWord){
                prevWord = WORD_LIST[j];
                let temp2 = temp.substr(WORD_LIST[j].length);
                
                if(temp2.length === 0) {
                    answer++;
                    break;
                }
                temp = temp2; 
                j = -1;
            }
        }
    }
    return answer;
}