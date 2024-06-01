function solution(cards1, cards2, goal) {
    let index_1 = 0;
    let index_2 = 0;
    
    let answer = 'Yes';
    goal.forEach((word)=> {
        if(word === cards1[index_1]) index_1 = index_1 + 1;
        else if(word === cards2[index_2]) index_2 = index_2 + 1;
        else answer = 'No';
    })
    
    return answer;
}