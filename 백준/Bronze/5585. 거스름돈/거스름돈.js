const input = +require('fs').readFileSync('dev/stdin').toString().trim();
let money = 1000 - input;
const moneyList = [500,100,50,10,5,1];
let count = 0;
   
moneyList.forEach((item)=> {
    count += Math.floor(money / item);
    money = money % item;  
})

console.log(count);
