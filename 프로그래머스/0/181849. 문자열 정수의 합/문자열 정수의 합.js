function solution(num_str) {
    var answer = 0;
    answer = [...num_str].reduce((acc,cur)=>acc+=+cur,0)
    return answer;
}