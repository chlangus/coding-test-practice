function solution(arr, queries) {
    var answer = arr;
    queries.forEach((item)=>{
        let [first,second] = item;
        let temp = answer[first];
        answer[first] = answer[second];
        answer[second] = temp;
    })
    return answer;
}