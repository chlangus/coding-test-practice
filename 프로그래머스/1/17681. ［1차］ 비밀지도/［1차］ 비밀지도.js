function solution(n, arr1, arr2) {
    var answer = [];
    // arr1이랑 2이진수로 변환
    const bi1 = arr1.map(i=>i.toString(2).padStart(n,0));
    const bi2 = arr2.map(i=>i.toString(2).padStart(n,0));
    for(let i=0; i<n;i++){
        let temp = '';
        for(let j=0; j<n;j++){
            if(bi1[i][j] === '1' || bi2[i][j] === '1') temp += '#';
            else temp += ' ';
        }
        answer.push(temp);
    }
    
    return answer;
}