function solution(array) {
    var answer = [];
    const newArray = [...array];
    array.sort((a,b)=>b-a);
    answer.push(array[0], newArray.indexOf(array[0]));
    return answer;
}