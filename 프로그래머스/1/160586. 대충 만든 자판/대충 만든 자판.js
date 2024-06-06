function solution(keymap, targets) {
    var answer = [];
    
    // targets 안에있는거 하나씩
    for(let i = 0; i<targets.length; i++){
        // targets의 index에 해당하는거 문자열
        for(const target of targets[i]){
            let min = 99;
            // target이 keymap의 몇번째 index인가
            for(let j=0; j<keymap.length; j++){
                // target이 keymap에 있으면 
                if(keymap[j].includes(target)){
                    if(keymap[j].indexOf(target) + 1 < min) min = keymap[j].indexOf(target) + 1;
                }
            }
            if(!answer[i]) answer[i] = 0;
            
            if(min === 99) {
                answer[i] = -1;
                break;
            }
            else answer[i] += min;
        }
    }
    return answer;
}