function solution(a, b) {
    var answer = 0;
    if(2*a*b-`${a}${b}` <= 0) answer = +`${a}${b}`;
    else answer = 2*a*b
    return answer;
}