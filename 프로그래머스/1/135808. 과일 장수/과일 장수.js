function solution(k, m, score) {
    let answer = 0;
    // m개씩, k넘어가면 k, score 정렬해서
    score.sort((a,b)=> b-a);
    const boxList = [];
    let box = [];
    
    score.forEach((item)=> {
        box.push(item);
        if(box.length === m) {
            boxList.push(box);
            box = [];
        }
    })
    
    boxList.forEach((box)=>{
        const min = Math.min(...box);
        if(min < k) answer += min * m;
        else answer += k * m;
    })
    return answer;
}