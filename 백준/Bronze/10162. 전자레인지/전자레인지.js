let input = +require('fs').readFileSync('dev/stdin').toString().trim();
// 5분 1분 10초
const [fiveM, oneM,tenS] = [300, 60, 10];
const result = [];
if(input%tenS) console.log(-1);
else {
    result.push(Math.floor(input / fiveM));
    input = input % fiveM;
    result.push(Math.floor(input / oneM));
    input = input % oneM;
    result.push(Math.floor(input / tenS));
    console.log(result.join(' '));
}
