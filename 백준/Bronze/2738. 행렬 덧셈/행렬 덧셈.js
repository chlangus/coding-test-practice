const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map((item)=>item.split(' '));

solution(input);

function solution(input){
    const [n,m] = input[0];
    for(let i = 0; i < +n; i++){
        let line = [];
        for(let j = 0; j < +m; j++){
            line.push(+input[i+1][j]+ +input[+n+i+1][j]);
        }
        console.log(line.join(' '));
    }
}