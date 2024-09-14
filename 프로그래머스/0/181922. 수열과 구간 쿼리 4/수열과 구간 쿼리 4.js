function solution(arr, queries) {
    var answer = [...arr];
    queries.forEach(item=>{
        for(let i = item[0]; i<=item[1]; i++){
            if(i%item[2]===0) arr[i]++;
        }
    })
    return arr;
}