function solution(n, numlist) {
    var answer = [];
    numlist.forEach((num)=>{if(!(num%n))answer.push(num);});
    return answer;
}