const fs = require('fs');
const N = parseInt(fs.readFileSync('/dev/stdin').toString().trim());

// 배열 대신 큐 역할을 할 Deque를 사용
class Deque {
  constructor() {
    this.items = [];
    this.head = 0;
    this.tail = 0;
  }
  
  push(val) {
    this.items[this.tail++] = val;
  }

  shift() {
    const value = this.items[this.head];
    this.head++;
    return value;
  }

  size() {
    return this.tail - this.head;
  }
}

const queue = new Deque();
for (let i = 1; i <= N; i++) {
  queue.push(i);
}

while (queue.size() > 1) {
  queue.shift(); // 첫 번째 카드를 버림
  queue.push(queue.shift()); // 두 번째 카드를 뒤로 보냄
}

console.log(queue.shift()); // 남은 마지막 카드 출력
