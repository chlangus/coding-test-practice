function solution(numbers, hand) {
     const keyPad = {
        1: [0, 0], 2: [0, 1], 3: [0, 2],
        4: [1, 0], 5: [1, 1], 6: [1, 2],
        7: [2, 0], 8: [2, 1], 9: [2, 2],
        '*': [3, 0], 0: [3, 1], '#': [3, 2]
    };

    function getDistance(pos1, pos2) {
        return Math.abs(pos1[0] - pos2[0]) + Math.abs(pos1[1] - pos2[1]);
    }

    let leftThumb = keyPad['*'];
    let rightThumb = keyPad['#'];
    let result = '';

    for (let number of numbers) {
        let target = keyPad[number];

        if (number === 1 || number === 4 || number === 7) {
            result += 'L';
            leftThumb = target;
        } else if (number === 3 || number === 6 || number === 9) {
            result += 'R';
            rightThumb = target;
        } else {
            let leftDistance = getDistance(leftThumb, target);
            let rightDistance = getDistance(rightThumb, target);

            if (leftDistance < rightDistance) {
                result += 'L';
                leftThumb = target;
            } else if (rightDistance < leftDistance) {
                result += 'R';
                rightThumb = target;
            } else {
                if (hand === "right") {
                    result += 'R';
                    rightThumb = target;
                } else {
                    result += 'L';
                    leftThumb = target;
                }
            }
        }
    }

    return result;
}