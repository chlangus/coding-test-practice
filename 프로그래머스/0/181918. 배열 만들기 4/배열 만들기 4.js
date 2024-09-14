function solution(arr) {
    var stk = [];
    let i = 0;
    
    while(i < arr.length){
        if(stk == '') stk.push(arr[i++]);
        else {
            if(stk[stk.length-1] < arr[i]) stk.push(arr[i++]);
            else {
                stk.pop();
            }
        }
    }
    return stk;
}