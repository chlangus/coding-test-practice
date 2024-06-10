function solution(board, moves) {
    let answer = 0;
    let catchedItem = [];
    
    for(let i = 0; i < moves.length; i++){
        for(let line of board) {
            if(line[moves[i] - 1] !== 0) {
                catchedItem.push(line[moves[i] - 1]);
                line[moves[i] - 1] = 0;
                break;
            }
        };
    }
    for(let i = 0; i < catchedItem.length - 1; i++){
            console.log(catchedItem[i]);
        if(catchedItem[i] === catchedItem[i+1]) {
            catchedItem.splice(i,2);
            answer += 2;
            i = -1; 
        }
        
    }
    // 4 3 1 1 3 2 4
    return answer;
}