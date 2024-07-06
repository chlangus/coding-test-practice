const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

solution(input);

function solution(input){
    const T = input[0];
    
    for(let i=0; i<+T; i++){
        const word = input[i+1];
        console.log(word[0]+word[word.length-1]);
    }
}
