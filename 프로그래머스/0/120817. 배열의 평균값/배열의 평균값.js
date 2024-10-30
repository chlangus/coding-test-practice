function solution(numbers) {
    var answer = 0;
    answer = (numbers.reduce((acc,item)=> item + acc,0) / numbers.length).toFixed(1);
    return answer;
}