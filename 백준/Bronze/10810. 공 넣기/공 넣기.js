const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

solution(input);

function solution(input){
    const [M, N] = input[0].split(' ');
    let answerAry = new Array(+M).fill(0); 
    for(let i=1; i < +N+1; i++){
        const [a,b,n] = input[i].split(' ');
        answerAry.fill(+n,+a-1,+b);
    }
    console.log(answerAry.join(' '));
}