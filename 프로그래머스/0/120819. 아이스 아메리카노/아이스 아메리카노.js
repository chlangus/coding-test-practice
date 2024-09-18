function solution(money) {
    var answer = [];
    const coffeePrice = 5500;
    answer.push(Math.floor(money/coffeePrice));
    money %= coffeePrice;
    answer.push(money);
    return answer;
}