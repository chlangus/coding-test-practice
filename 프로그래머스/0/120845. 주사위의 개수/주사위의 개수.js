function solution(box, n) {
    var answer = 1;
    
    for(let i=0; i<box.length; i++){
        answer *= Math.floor(box[i]/n);
        console.log(answer);
    }
    return answer;
}