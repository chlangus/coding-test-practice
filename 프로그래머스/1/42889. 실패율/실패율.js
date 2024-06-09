function solution(N, stages) {
    var answer = [];
    let failureRates = [];
    // 실패율 = 스테이지인 사람 수 / 스테이지 이상인 사람 수
    // N 스테이지 개수, stages
    // 스테이지 순회, 해당스테이지인 사람, 해당 스테이지 이전, 스테이지 이상
    for(let stage=1; stage<=N; stage++){
        // 완료한사람 
        let complete = 0;
        let notComplete = 0;
        for(let user of stages){
            if(stage === user) notComplete += 1;
            if(user >= stage) complete += 1;
        }
        failureRates[stage-1] = notComplete / complete;
    }
    
    let sortedFailureRates = [];
    for(let i = 0; i<failureRates.length; i++){
        sortedFailureRates.push([i+1, failureRates[i]]);
    }
    sortedFailureRates.sort((a,b) => b[1] - a[1]);
    
    return sortedFailureRates.map((rate)=> rate[0]);
}