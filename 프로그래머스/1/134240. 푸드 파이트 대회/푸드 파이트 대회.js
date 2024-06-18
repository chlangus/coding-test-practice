function solution(food) {
    var answer = '';
    let temp = [];
    for(let i=1; i<food.length; i++){
        const length = Math.floor(food[i]/2);
        for(let j=0; j<length; j++){
            temp.push(i);
        }
    }
    
    temp.push(0);
    
    for(let i=food.length-1; i>0; i--){
        const length = Math.floor(food[i]/2);
        for(let j=0; j<length; j++){
            temp.push(i);
        }
    }
    answer = temp.join('');

    return answer;
}