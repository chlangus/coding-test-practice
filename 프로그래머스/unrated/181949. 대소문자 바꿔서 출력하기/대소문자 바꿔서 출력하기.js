const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    let newStr = "";
    for(s of str){
        if (s>='a' && s<='z'){
            newStr+= (s.toUpperCase());        
        }else newStr += (s.toLowerCase());
    }
    console.log(newStr);
});