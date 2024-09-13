function solution(s1, s2) {
    var answer = 0;
    const newS2 = new Set(s2);
    
    s1.forEach(item => {
        if(newS2.has(item)) answer++;
    })
    return answer;
}