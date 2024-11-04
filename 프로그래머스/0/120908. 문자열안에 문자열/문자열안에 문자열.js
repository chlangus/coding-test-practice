function solution(str1, str2) {
    var answer = 0;
    answer = str1.indexOf(str2) === -1 ? 2 : 1;
    return answer;
}