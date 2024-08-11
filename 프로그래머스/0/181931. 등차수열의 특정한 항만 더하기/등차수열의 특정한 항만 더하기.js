function solution(a, d, included) {
    var answer = 0;
    let number = 0;
    included.forEach((bool,idx)=>{
        if(idx === 0) number = a;
        else {
            number += d;
        }
        if(bool === true) answer += number;
    })
    return answer;
}