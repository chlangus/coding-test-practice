function solution(array, commands) {
    var answer = [];
    // commands의 1번째 2번째 인덱스로 자른 다음 3번째 인덱스의 숫자의 수 가져오기
    for(const command of commands){
        answer.push(array.slice(command[0]-1, command[1]).sort((a,b) => a-b)[command[2]-1]);
    }
    return answer;
}