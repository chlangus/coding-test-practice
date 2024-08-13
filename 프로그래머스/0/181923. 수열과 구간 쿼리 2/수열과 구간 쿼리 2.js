function solution(arr, queries) {
    var answer = [];
    // queries 0,1 인덱스 중 2인덱스값보다 큰것중 가장 작은값
    queries.forEach(([start, end, minimum])=>{
        let temp = [];
        for(let i = start; i<=end; i++){
            if(arr[i]>minimum) temp.push(arr[i]);
        }
        
        if( temp == '') temp.push(-1);
        answer.push(Math.min(...temp));
    })
    return answer;
}