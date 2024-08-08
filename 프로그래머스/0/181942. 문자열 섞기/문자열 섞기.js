function solution(str1, str2) {
    var answer = '';
    let long_str = str1.length > str2.length ? str1 : str2;
    
    for(index in long_str){
        if(str1[index])answer += str1[index];
        if(str2[index]) answer += str2[index];
    }
    return answer;
}