function solution(x1, x2, x3, x4) {
    var answer = false;
    if((x1 || x2) && (x3 || x4)) answer = true;
    return answer;
}