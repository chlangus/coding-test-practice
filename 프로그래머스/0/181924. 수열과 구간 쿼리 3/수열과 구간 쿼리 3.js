function solution(arr, queries) {
    var answer = arr;
    queries.forEach(([first, second])=>{
        [answer[first], answer[second]] = [answer[second], answer[first]];
    })
    return answer;
}