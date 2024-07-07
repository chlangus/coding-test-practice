const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split(' ');

solution(input);

function solution(input){
    const chessArray = [1,1,2,2,2,8];
    let solution = [];
    chessArray.forEach((chess,index)=>{
        solution.push(chess - +input[index]);
    })
    
    console.log(solution.join(' '));
}