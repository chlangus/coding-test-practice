function solution(hp) {
    var answer = 0;
    const general = 5;
    const slave = 3;
    const job = 1;
    answer += Math.floor(hp / general);
    hp = hp % general;
    answer += Math.floor(hp / slave);
    hp = hp % slave;
    answer += Math.floor(hp / job);
    return answer;
}