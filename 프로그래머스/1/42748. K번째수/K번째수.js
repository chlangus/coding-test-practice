function solution(array, commands) {
    const answer = commands.map(([start, end, index])=>{
        const sortedArray = array.slice(start-1,end).sort((a,b)=>a-b);
        return sortedArray[index-1];
    })
    return answer;
}