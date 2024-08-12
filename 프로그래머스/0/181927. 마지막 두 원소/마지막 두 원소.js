function solution(num_list) {
    let answer = num_list;
    const last = num_list[num_list.length-1];
    const last_before = num_list[num_list.length-2]; 
    last > last_before ? answer.push(last- last_before) : answer.push(last*2);
    return answer;
}