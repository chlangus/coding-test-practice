function solution(rsp) {
    var answer = '';
    const aa = {'2': '0', '0' : '5','5':'2'};
    for(let i = 0; i<rsp.length; i++){
        answer+=aa[rsp[i]];
    };
    return answer;
}