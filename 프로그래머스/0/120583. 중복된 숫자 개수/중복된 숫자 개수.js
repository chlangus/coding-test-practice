function solution(array, n) {
    var answer = 0;
    array.forEach(item => {
        item === n && answer++;
    })
    return answer;
}