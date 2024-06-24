const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

solution(input);

function solution(input){
    let answer = 0;
    const ary = input[1].split(' ');
    for(let i = 0; i< input[0]; i++){
        if(input[2] === ary[i]) answer++;
    }
    console.log(answer);
}