function solution(numbers, hand) {
    let answer = '';
    const keypad = {'1': [0,0], '2': [0,1], '3': [0,2],
                    '4': [1,0], '5': [1,1], '6': [1,2],
                    '7': [2,0], '8': [2,1], '9': [2,2],
                    '*': [3,0], '0': [3,1], '#': [3,2]};
    
    let leftCurrent = '*';
    let rightCurrent = '#';
    
    function getDistance(current, target) {
        return Math.abs(current[0]-target[0]) + Math.abs(current[1]-target[1]);
    };
    
    for(const number of numbers){ 
        switch(number){
            case 1: case 4: case 7: 
                answer+='L';
                leftCurrent = number;
                break;
            case 3: case 6: case 9: 
                answer+='R';
                rightCurrent = number;
                break;
            case 2: case 5: case 8: case 0: 
                const letfDistance = getDistance(keypad[leftCurrent], keypad[number]);
                const rightDistance = getDistance(keypad[rightCurrent], keypad[number]);
                if(letfDistance < rightDistance) {
                    answer += 'L';
                    leftCurrent = number;
                }
                else if(letfDistance > rightDistance) {
                    answer += 'R';
                    rightCurrent = number;
                }else {
                    if(hand==='right') {
                        answer += 'R';
                        rightCurrent = number;
                    }else {
                        answer += 'L';
                        leftCurrent = number;
                    }
                }
        }
    }
    
    return answer;
}