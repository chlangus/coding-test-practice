const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

solution(input);

function solution(input){
    const sortedArray = input.slice(1).sort((a, b) => a - b);
    
    sortedArray.forEach((item) => {
        console.log(+item);
    });
}