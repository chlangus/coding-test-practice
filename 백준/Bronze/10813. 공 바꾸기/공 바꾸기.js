const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

solution(input);

function solution(input){
    const [N, M] = input[0].split(' ');
    let answer = []; 
    for(let i=1; i<=+N; i++){
        answer.push(i);
    }
    for(let i=1; i<+M+1; i++){
        const [a,b] = input[i].split(' ');
        let temp = answer[+a-1];
        answer[+a-1] = answer[+b-1];
        answer[+b-1] = temp;
    }

    console.log(answer.join(' '));
}